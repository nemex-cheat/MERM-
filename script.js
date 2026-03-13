/**
 * PROJECT: Bacişime Özel Digital Hatıra - CORE ENGINE
 * DEVELOPER: @NEMEXULTRA (nemex-cheat)
 * REPO: MERM-
 * CREDITS: @FOFRİC (CANDOSTUM)
 */

// 1. YAPILANDIRMA VE GLOBAL DEĞİŞKENLER
const CONFIG = {
    username: "nemex-cheat",
    repo: "MERM-",
    branch: "main",
    photos: ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"],
    quotes: [
        "Aynı kanda olmasak da, ruhumuz bir. İyi ki varsın bacım...",
        "Mesafeler sadece yollar içindir, kalpler hep yan yana.",
        "Senin gibi bir bacıya sahip olduğum için dünyanın en şanslı insanıyım.",
        "Hayatın tüm renkleri seninle daha parlak ✨",
        "Her zaman arkanda, her zaman yanındayım."
    ]
};

// 2. ÖN YÜKLEYİCİ VE BAŞLATICI (INITIALIZER)
window.addEventListener('load', () => {
    console.log("Sistem Başlatıldı: @NEMEXULTRA Projesi");
    
    // Rastgele bir söz seç ve ekrana bas
    setRandomQuote();
    
    // Arka plan efektlerini başlat
    initFloatingHearts();

    // 2 saniye sonra ön yükleyiciyi kaldır (App hissi için suni gecikme)
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.style.display = 'none'; }, 500);
    }, 2000);
});

// 3. DİNAMİK SÖZ MOTORU
function setRandomQuote() {
    const quoteElement = document.getElementById('dynamic-quote');
    const randomIndex = Math.floor(Math.random() * CONFIG.quotes.length);
    if (quoteElement) {
        quoteElement.innerText = CONFIG.quotes[randomIndex];
    }
}

// 4. ARKA PLAN EFEKT MOTORU (Yüzen Kalpler)
function initFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;

    // Her 800ms'de bir yeni bir kalp oluştur
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        
        // Rastgele yatay pozisyon ve boyut
        const leftPos = Math.random() * 100;
        const duration = 4 + Math.random() * 4; // 4s ile 8s arası hız
        const size = 10 + Math.random() * 20; // 10px ile 30px arası boyut

        heart.style.left = leftPos + 'vw';
        heart.style.animationDuration = duration + 's';
        heart.style.fontSize = size + 'px';
        heart.style.opacity = Math.random();

        container.appendChild(heart);

        // Animasyon bitince hafızayı yormamak için kalbi sil
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 800);
}

// 5. MODÜL YÖNETİM SİSTEMİ (Sayfa Geçişleri)
function openModule(moduleName) {
    console.log("Modül Açılıyor: " + moduleName);
    const target = document.getElementById('module-' + moduleName);
    if (target) {
        target.classList.add('active');
        // Sayfa kaydırmayı engelle (Modal hissi için)
        document.body.style.overflow = 'hidden';
    }
}

function closeModule(moduleName) {
    const target = document.getElementById('module-' + moduleName);
    if (target) {
        target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// 6. GELİŞMİŞ GALERİ VE ZOOM SİSTEMİ
function zoomImage(imgElement) {
    // Basit bir tıklama efekti (Zoom)
    imgElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        imgElement.style.transform = 'scale(1)';
        // Gerçek bir pro-zoom sistemi için alert yerine modal kullanılabilir
        // Şimdilik bacişine özel bir mesaj verelim
        alert("Bacişimin Güzelliği Yakiyo! ❤️");
    }, 100);
}

// 7. OYUN MANTIĞI: "BACİŞİMİ NE KADAR TANIYORSUN?"
let currentQuestion = 0;
const gameData = [
    { q: "Bacişimin en sevdiği renk ne?", a: "Pembe", options: ["Mavi", "Pembe", "Siyah"] },
    { q: "Bizim en sevdiğimiz aktivite?", a: "Dertleşmek", options: ["Uyku", "Dertleşmek", "Yemek"] },
    { q: "Bacişim bir çiçek olsa ne olurdu?", a: "Papatya", options: ["Gül", "Papatya", "Kaktüs"] }
];

function startGame() {
    const zone = document.getElementById('game-zone');
    currentQuestion = 0;
    renderQuestion();
}

function renderQuestion() {
    const zone = document.getElementById('game-zone');
    const data = gameData[currentQuestion];
    
    let html = `
        <div class="game-card glass-card">
            <h3>Soru ${currentQuestion + 1}</h3>
            <p>${data.q}</p>
            <div class="options-grid">
                ${data.options.map(opt => `
                    <button class="game-opt-btn" onclick="checkAnswer('${opt}')">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
    zone.innerHTML = html;
}

function checkAnswer(selected) {
    if (selected === gameData[currentQuestion].a) {
        currentQuestion++;
        if (currentQuestion < gameData.length) {
            renderQuestion();
        } else {
            document.getElementById('game-zone').innerHTML = `
                <div class="game-win">
                    <h3>TEBRİKLER! 🎉</h3>
                    <p>Bacişini gerçekten çok iyi tanıyorsun. Sen en kral abisin/kardeşsin!</p>
                    <button class="start-game-btn" onclick="startGame()">TEKRAR OYNA</button>
                </div>
            `;
        }
    } else {
        alert("Yandın! Baştan başla bakalım.");
        startGame();
    }
}

// 8. GELİŞTİRİCİ İMZASI (CONSOLE LOG)
console.log(`
 %c @NEMEXULTRA %c SİSTEM ÇALIŞIYOR 
`, "background: #ff2d75; color: white; font-weight: bold; padding: 5px;", "background: #000; color: #00d2ff; padding: 5px;");
                
// Müzik Elemanlarını Seçiyoruz
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

// Müziği Başlatma/Durdurma Fonksiyonu
function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicIcon.classList.remove('music-playing'); // Dönme efektini kaldır
        isPlaying = false;
        console.log("Müzik Durduruldu");
    } else {
        // Tarayıcı izinleri için oynatma sözü (promise)
        audio.play().then(() => {
            musicIcon.classList.add('music-playing'); // CSS'deki dönme efektini ekle
            isPlaying = true;
            console.log("Müzik Çalıyor");
        }).catch(error => {
            console.log("Müzik çalınamadı: ", error);
            alert("Lütfen önce sayfaya bir yere dokun, sonra müziği başlat!");
        });
    }
}
