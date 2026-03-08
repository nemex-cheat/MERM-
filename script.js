// Animasyonları Başlat (AOS Kütüphanesi)
AOS.init({
    duration: 1000,
    once: true
});

// Sürpriz Butonu İşlemleri
const surpriseBtn = document.getElementById('surpriseBtn');
const bgMusic = document.getElementById('bgMusic');

surpriseBtn.addEventListener('click', () => {
    // 1. Müziği Başlat
    bgMusic.play().then(() => {
        console.log("Müzik mermi gibi çalıyor karsim!");
    }).catch(error => {
        console.log("Müzik için kullanıcı etkileşimi lazım.");
    });

    // 2. Konfeti Patlaması
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    // 3. Ekrana Kalp Yağmuru (Özel Animasyon)
    createHeartRain();

    // 4. Kısa Bir Gecikmeyle Mesaj
    setTimeout(() => {
        alert("Senin mutluluğun benim için her şeyden önemli. Daima yanındayım canım bacım! ❤️ - @NEMEXULTRA");
    }, 1500);
});

// Kalp Yağmuru Fonksiyonu
function createHeartRain() {
    const heartCount = 30;
    for(let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-5vh';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.transition = 'transform 3s linear, opacity 3s linear';
            
            document.body.appendChild(heart);
            
            // Animasyonu başlat
            requestAnimationFrame(() => {
                heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
                heart.style.opacity = '0';
            });

            // 3 saniye sonra temizle
            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
}

// Konsol Mesajı - @NEMEXULTRA Kalitesi
console.log("%c @NEMEXULTRA %c Sürpriz Yazılımı Aktif!", "background: #ff0077; color: #fff; padding: 5px; border-radius: 5px;", "color: #ffcc00;");
      
