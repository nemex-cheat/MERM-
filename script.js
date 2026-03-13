/**
 * ================================================================
 * PROJECT  : MERM- ULTIMATE CORE (Bacişime Özel V4.0)
 * DEVELOPER: @NEMEXULTRA (nemex-cheat)
 * CORE     : ADVANCED JS ENGINE & METEOR PARTICLE SYSTEM
 * ================================================================
 */

// 1. SİSTEM DEĞİŞKENLERİ VE KONFİGÜRASYON
const SYSTEM_CONFIG = {
    audioPath: "https://raw.githubusercontent.com/nemex-cheat/MERM-/main/gemini_generated_media_f0acc49d.mp3",
    meteorCount: 25, // Meteor yoğunluğu
    heartCount: 15,
    quotes: [
        "Aynı kanda olmasak da, ruhumuz bir. İyi ki varsın bacım...",
        "Senin gibi bir bacıya sahip olduğum için dünyanın en şanslı insanıyım.",
        "Hayatın tüm renkleri seninle daha parlak ✨",
        "Her zaman arkanda, her zaman yanındayım.",
        "Senin yerin bende hep bambaşka kalacak."
    ]
};

// 2. METEOR YAĞMURU MOTORU (CANVAS CORE)
const canvas = document.getElementById('meteor-canvas');
const ctx = canvas.getContext('2d');
let meteors = [];

function initMeteorEngine() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    meteors = [];
    for (let i = 0; i < SYSTEM_CONFIG.meteorCount; i++) {
        meteors.push(new Meteor());
    }
}

class Meteor {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width + 200; // Sağ üstten başla
        this.y = Math.random() * -canvas.height;
        this.length = Math.random() * 120 + 50;
        this.speed = Math.random() * 12 + 6;
        this.opacity = Math.random() * 0.7;
        this.width = Math.random() * 1.5 + 0.5;
    }

    update() {
        this.x -= this.speed;
        this.y += this.speed;

        if (this.y > canvas.height || this.x < -100) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y - this.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 45, 117, 0)'); // Pembe kuyruk efekti
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y - this.length);
        ctx.stroke();
    }
}

function animateEngine() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    meteors.forEach(m => {
        m.update();
        m.draw();
    });
    requestAnimationFrame(animateEngine);
}

// 3. SİSTEM BAŞLATICI (BOOTLOADER)
window.addEventListener('load', () => {
    initMeteorEngine();
    animateEngine();
    
    // Rastgele söz seçimi
    const qElement = document.getElementById('dynamic-quote');
    if (qElement) {
        qElement.innerText = SYSTEM_CONFIG.quotes[Math.floor(Math.random() * SYSTEM_CONFIG.quotes.length)];
    }

    // Preloader'ı profesyonel bir geçişle kaldır
    setTimeout(() => {
        const loader = document.getElementById('preloader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 2500);
});

// Pencere boyutu değiştiğinde canvas'ı güncelle
window.addEventListener('resize', initMeteorEngine);

/**
 * SECTION 2: AUDIO ENGINE & INTERACTIVE GAME LOGIC
 * Sesi ve interaktif modülleri yöneten ana blok.
 */

// 4. MÜZİK MOTORU (MASTER CONTROLLER)
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('main-music-btn');
const musicIcon = document.getElementById('music-icon');
let isMusicPlaying = false;

function toggleMusic() {
    if (!audio) return;

    if (isMusicPlaying) {
        audio.pause();
        musicIcon.classList.remove('music-playing');
        musicBtn.classList.remove('active-glow');
        isMusicPlaying = false;
        console.log("Audio: Paused");
    } else {
        // Modern tarayıcılar için etkileşim sözü (promise)
        audio.play().then(() => {
            musicIcon.classList.add('music-playing');
            musicBtn.classList.add('active-glow');
            isMusicPlaying = true;
            console.log("Audio: Playing -> " + SYSTEM_CONFIG.audioPath);
        }).catch(error => {
            console.error("Audio: Playback failed", error);
            // Şık bir uyarı mesajı
            showGameMessage("Müzik için önce ekrana dokunmalısın! ❤️");
        });
    }
}

// 5. GELİŞMİŞ OYUN MOTORU (3D QUESTION SYSTEM)
const gameState = {
    currentQuestion: 0,
    score: 0,
    questions: [
        {
            q: "Bacişimin en sevdiği renk hangisi?",
            o: ["Neon Pembe", "Gece Siyahı", "Gök Mavisi"],
            a: 0 // Neon Pembe
        },
        {
            q: "Senin gibi bir abisi/kardeşi olduğu için bacişin ne kadar şanslı?",
            o: ["Çok", "Dünyalar Kadar", "Sonsuz"],
            a: 2 // Hepsi doğru ama Sonsuz en iyisi
        },
        {
            q: "Bizim bağımızı ne koparabilir?",
            o: ["Mesafeler", "Kavgalar", "Hiçbir Şey"],
            a: 2 // Hiçbir Şey
        }
    ]
};

function startGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    renderGameStep();
}

function renderGameStep() {
    const zone = document.getElementById('game-zone');
    const step = gameState.questions[gameState.currentQuestion];

    if (!step) {
        // Oyun Bitti Ekranı
        zone.innerHTML = `
            <div class="game-card-3d animate__animated animate__zoomIn">
                <i class="fas fa-trophy" style="font-size: 3rem; color: gold; margin-bottom: 20px;"></i>
                <h3>TEBRİKLER!</h3>
                <p>Bacişini gerçekten kalbinden tanıyorsun.</p>
                <button class="pro-btn" onclick="closeModule('game')">MENÜYE DÖN</button>
            </div>
        `;
        return;
    }

    zone.innerHTML = `
        <div class="game-card-3d animate__animated animate__fadeInRight">
            <span class="q-count">SORU ${gameState.currentQuestion + 1}/${gameState.questions.length}</span>
            <p class="q-text">${step.q}</p>
            <div class="options-container">
                ${step.o.map((opt, index) => `
                    <button class="pro-btn option-btn" onclick="processAnswer(${index})">
                        ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function processAnswer(index) {
    const correct = gameState.questions[gameState.currentQuestion].a;
    
    if (index === correct) {
        gameState.currentQuestion++;
        // Başarı efekti (opsiyonel konsol logu)
        renderGameStep();
    } else {
        // Yanlış cevapta 3D sarsılma efekti simülasyonu
        const card = document.querySelector('.game-card-3d');
        card.classList.add('animate__shakeX');
        setTimeout(() => {
            alert("Yanlış cevap! Bacişin seni izliyor, odaklan. 😉");
            startGame(); // Baştan başlat
        }, 500);
    }
}

function showGameMessage(msg) {
    // Basit bir alert yerine daha şık bir yöntem
    alert(msg);
}

/**
 * SECTION 3: GALLERY ENGINE, FLOATING EMOTIONS & MODULE CONTROLLER
 * Görsel sunum ve modüler geçişleri yöneten final bloğu.
 */

// 6. GALERİ MOTORU (DİNAMİK YÜKLEME)
const gallerySettings = {
    imageCount: 4, // Kaç tane foto ekleyeceksen burayı artır
    imagePrefix: "foto", // foto1.jpg, foto2.jpg şeklinde gitmeli
    baseUrl: `https://raw.githubusercontent.com/${SYSTEM_CONFIG.username}/${SYSTEM_CONFIG.repo}/main/`
};

function loadGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    
    grid.innerHTML = ''; // Temizle
    
    for (let i = 1; i <= gallerySettings.imageCount; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item animate__animated animate__fadeInUp';
        item.style.animationDelay = `${i * 0.1}s`;
        
        const img = document.createElement('img');
        img.src = `${gallerySettings.baseUrl}${gallerySettings.imagePrefix}${i}.jpg`;
        img.alt = `Bacişim Anı ${i}`;
        img.loading = "lazy"; // Performans için
        
        // Fotoğrafa tıklayınca büyüme efekti
        img.onclick = () => {
            img.classList.toggle('zoomed');
            console.log(`Gallery: Image ${i} interacted.`);
        };
        
        item.appendChild(img);
        grid.appendChild(item);
    }
}

// 7. YÜZEN KALPLER SİSTEMİ (FLOATING EMOTIONS)
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        
        // Rastgele emoji seçimi (Sadece kalp değil, parıltı da ekledik)
        const emojis = ['❤️', '💖', '✨', '🌸', '💫'];
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        const startPos = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const size = Math.random() * 20 + 10;

        heart.style.left = `${startPos}vw`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.opacity = Math.random() * 0.6 + 0.4;

        container.appendChild(heart);

        // DOM'u kirletmemek için süresi dolanı sil
        setTimeout(() => heart.remove(), duration * 1000);
    }, 800);
}

// 8. MODÜL YÖNETİM MERKEZİ
function openModule(moduleName) {
    const module = document.getElementById(`module-${moduleName}`);
    if (module) {
        module.classList.add('active');
        document.body.style.overflow = 'hidden'; // Arka plan kaymasını durdur
        
        // Galeri açılıyorsa fotoğrafları yükle
        if (moduleName === 'gallery') loadGallery();
        // Oyun açılıyorsa motoru başlat
        if (moduleName === 'game') startGame();
        
        console.log(`System: Module '${moduleName}' activated.`);
    }
}

function closeModule(moduleName) {
    const module = document.getElementById(`module-${moduleName}`);
    if (module) {
        module.classList.remove('active');
        document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
    }
}

// 9. SİSTEM ÇALIŞTIRMA (FINAL BOOT)
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    
    // Konsol için küçük bir sürpriz
    console.log(`
    %c NEMEXULTRA OS v4.0 %c
    -------------------------
    Target: @SOF_Aİ_2672
    Status: Fully Operational
    -------------------------
    `, "color: #ff2d75; font-weight: bold;", "color: #fff;");
});
