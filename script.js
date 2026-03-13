/**
 * PROJECT: MERM- (Bacişime Özel Digital Hatıra)
 * DEVELOPER: @NEMEXULTRA (nemex-cheat)
 * TARGET: @SOF_Aİ_2672
 * CREDITS: @FOFRİC (CANDOSTUM)
 * CORE: JavaScript Logic Engine
 */

// 1. AYARLAR (CONFIG)
const SETTINGS = {
    username: "nemex-cheat",
    repo: "MERM-",
    audioFile: "gemini_generated_media_f0acc49d.mp3",
    quotes: [
        "Aynı kanda olmasak da, ruhumuz bir. İyi ki varsın bacım...",
        "Her zaman arkanda, her zaman yanındayım.",
        "Mesafeler sadece yollar içindir, kalpler hep yan yana.",
        "Senin gibi bir bacıya sahip olduğum için dünyanın en şanslı insanıyım.",
        "Hayatın tüm renkleri seninle daha parlak ✨"
    ]
};

// 2. SİSTEM BAŞLATICI (INITIALIZER)
window.addEventListener('DOMContentLoaded', () => {
    console.log("Sistem Başlatıldı: @NEMEXULTRA Projesi");
    
    // Rastgele sözü ayarla
    initQuotes();
    
    // Arka plan kalplerini başlat
    createHearts();

    // Ön yükleyiciyi (Preloader) kaldır
    setTimeout(() => {
        const loader = document.getElementById('preloader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 800);
        }
    }, 2000);
});

// 3. DİNAMİK SÖZ MOTORU
function initQuotes() {
    const qElement = document.getElementById('dynamic-quote');
    if (qElement) {
        const randomQuote = SETTINGS.quotes[Math.floor(Math.random() * SETTINGS.quotes.length)];
        qElement.innerText = randomQuote;
    }
}

// 4. ARKA PLAN EFEKT MOTORU (Yüzen Kalpler)
function createHearts() {
    const bg = document.getElementById('floating-hearts');
    if (!bg) return;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        
        const size = Math.random() * (30 - 10) + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * (8 - 4) + 4;

        heart.style.left = left + 'vw';
        heart.style.fontSize = size + 'px';
        heart.style.animationDuration = duration + 's';
        heart.style.opacity = Math.random();

        bg.appendChild(heart);

        // Belleği temizlemek için kalbi sil
        setTimeout(() => heart.remove(), duration * 1000);
    }, 1000);
}

// 5. MÜZİK KONTROL ÜNİTESİ (Bacişimin Şarkısı)
const sarki = document.getElementById('bg-music');
const sarkiIkon = document.getElementById('music-icon');
let isPlaying = false;

function toggleMusic() {
    if (!sarki) return;

    if (isPlaying) {
        sarki.pause();
        sarkiIkon.classList.remove('music-playing');
        isPlaying = false;
        console.log("Müzik Durduruldu.");
    } else {
        sarki.play().then(() => {
            sarkiIkon.classList.add('music-playing');
            isPlaying = true;
            console.log("Müzik Çalıyor: " + SETTINGS.audioFile);
        }).catch(err => {
            console.error("Otomatik oynatma engellendi, etkileşim bekleniyor.");
            alert("Müziği başlatmak için önce ekranda herhangi bir yere dokun, sonra butona bas! ❤️");
        });
    }
}

// 6. MODÜL VE GALERİ YÖNETİMİ
function openModule(name) {
    const target = document.getElementById('module-' + name);
    if (target) {
        target.classList.add('active');
        document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
    }
}

function closeModule(name) {
    const target = document.getElementById('module-' + name);
    if (target) {
        target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// 7. FOTOĞRAF ZOOM EFEKTİ
function zoomImage(el) {
    el.style.transition = "transform 0.3s ease";
    el.style.transform = "scale(0.95)";
    setTimeout(() => {
        el.style.transform = "scale(1)";
        console.log("Fotoğraf incelendi: " + el.src);
    }, 200);
}

// 8. OYUN MANTIĞI (BASİT TEST)
function startGame() {
    const zone = document.getElementById('game-zone');
    zone.innerHTML = `
        <div class="game-card glass-card">
            <p>Bacişini ne kadar seviyorsun?</p>
            <button class="start-game-btn" onclick="alert('Biliyoruz, dünyalar kadar! ❤️'); startGame();">Çok!</button>
            <button class="start-game-btn" onclick="alert('Daha fazla sevmelisin! 😜');">Az</button>
        </div>
    `;
}

// 9. DEVELOPER SIGNATURE (Console)
console.log(`
 %c @NEMEXULTRA %c SİTE AKTİF 
`, "background: #ff2d75; color: white; font-weight: bold; padding: 5px; border-radius: 5px;", "color: #00d2ff; padding: 5px;");
