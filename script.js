<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Canım Bacıma Özel | @NEMEXULTRA</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="preloader">
        <div class="loader-content">
            <div class="heart-spinner">❤️</div>
            <p>Bacişimin Dünyası Yükleniyor...</p>
        </div>
    </div>

    <div class="background-wrapper">
        <div id="stars"></div>
        <div id="floating-hearts"></div>
    </div>

    <div class="app-container">
        
        <header class="main-header">
            <div class="profile-section">
                <div class="avatar-wrapper">
                    <img src="https://raw.githubusercontent.com/nemex-cheat/MERM-/main/profil.jpg" alt="Bacişim" class="profile-img">
                    <div class="pulse-ring"></div>
                </div>
                <h1 class="glow-text">Bacişim</h1>
                <p class="status-tag"><i class="fas fa-circle"></i> Çevrimiçi (Sonsuza Kadar)</p>
            </div>
        </header>

        <section class="quote-section">
            <div class="glass-card quote-card">
                <i class="fas fa-quote-left icon-quote"></i>
                <p id="dynamic-quote">"Her zaman arkanda, her zaman yanındayım." — Senin erkekbacin</p>
                <div class="card-footer">
                    <span>— Senin Abin / Kardeşin</span>
                </div>
            </div>
        </section>

        <nav class="action-menu">
            <div class="menu-grid">
                <div class="menu-item" onclick="openModule('gallery')">
                    <div class="menu-icon icon-pink"><i class="fas fa-images"></i></div>
                    <span>Galeri</span>
                </div>
                <div class="menu-item" onclick="openModule('game')">
                    <div class="menu-icon icon-purple"><i class="fas fa-gamepad"></i></div>
                    <span>Oyun</span>
                </div>
                <div class="menu-item" onclick="openModule('music')">
                    <div class="menu-icon icon-blue"><i class="fas fa-music"></i></div>
                    <span>Müzik</span>
                </div>
            </div>
        </nav>

        <footer class="ultra-footer">
            <div class="credits-box">
                <div class="dev-info">
                    <span class="label">DEVELOPED BY</span>
                    <span class="name">@NEMEXULTRA</span>
                </div>
                <div class="target-info">
                    <span class="label">EXCLUSIVE FOR</span>
                    <span class="name">@SOF_Aİ_2672</span>
                </div>
                <div class="divider-line"></div>
                <div class="supporter-info">
                    <span class="label">SPECIAL THANKS TO (CAN DOSTUM)</span>
                    <span class="name">@FOFRİC</span>
                </div>
            </div>
        </footer>
    </div>

    <div id="module-gallery" class="full-screen-module">
        <div class="module-header">
            <button class="back-btn" onclick="closeModule('gallery')"><i class="fas fa-chevron-left"></i> Geri</button>
            <h2>Bacişimin Albümü</h2>
        </div>
        <div class="gallery-container">
            <div class="gallery-item"><img src="https://raw.githubusercontent.com/nemex-cheat/MERM-/main/foto1.jpg" onclick="zoomImage(this)"></div>
            <div class="gallery-item"><img src="https://raw.githubusercontent.com/nemex-cheat/MERM-/main/foto2.jpg" onclick="zoomImage(this)"></div>
            <div class="gallery-item"><img src="https://raw.githubusercontent.com/nemex-cheat/MERM-/main/foto3.jpg" onclick="zoomImage(this)"></div>
            <div class="gallery-item"><img src="https://raw.githubusercontent.com/nemex-cheat/MERM-/main/foto4.jpg" onclick="zoomImage(this)"></div>
        </div>
    </div>

    <div id="module-game" class="full-screen-module">
        <div class="module-header">
            <button class="back-btn" onclick="closeModule('game')"><i class="fas fa-chevron-left"></i> Geri</button>
            <h2>Bacişimi Tanı</h2>
        </div>
        <div class="game-content">
            <div id="game-zone">
                <p>Hazır mısın? Bacişin hakkında sorular başlıyor...</p>
                <button class="start-game-btn" onclick="startGame()">OYUNU BAŞLAT</button>
            </div>
        </div>
    </div>

    <audio id="bg-music" loop>
        <source src="https://raw.githubusercontent.com/nemex-cheat/MERM-/main/gemini_generated_media_f0acc49d.mp3" type="audio/mpeg">
    </audio>

    <script src="script.js"></script>
</body>
</html>
    
