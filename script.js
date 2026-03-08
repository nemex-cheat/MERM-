const searchInput = document.getElementById('searchInput');
const profilePage = document.getElementById('profilePage');
const placeholder = document.getElementById('searchPlaceholder');
const bgMusic = document.getElementById('bgMusic');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    
    // Eğer doğru kullanıcı adı yazılırsa
    if (value === 'sofiya_3892') {
        profilePage.style.display = 'block';
        placeholder.style.display = 'none';
        
        // Müzik çalsın
        bgMusic.play();
        
        // Konfeti patlasın (Mermi etkisi!)
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        profilePage.style.display = 'none';
        placeholder.style.display = 'flex';
    }
});

// Fotoğraflara çift tıklayınca kalp efekti (Daha sonra ekleyeceğiz)

// Fotoğraflara Beğeni Efekti
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    post.addEventListener('dblclick', function(e) {
        // Kalp elementi oluştur
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'like-animation');
        
        // Tıklanan yere yerleştir
        this.appendChild(heart);
        
        // 1 saniye sonra kalbi kaldır
        setTimeout(() => {
            heart.remove();
        }, 1000);
        
        // Beğeni sesi veya konfeti de eklenebilir
        console.log("Gönderi beğenildi karsim!");
    });
});
