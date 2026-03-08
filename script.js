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
