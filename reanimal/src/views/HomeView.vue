<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">REANIMAL</div>
            <h1 class="hero-title">Reanimal Game Wiki, News & Strategy Guide</h1>
            <p class="hero-subtitle">
              Your comprehensive fan-created resource for <strong>Reanimal</strong> - the upcoming horror adventure game from Tarsier Studios, creators of Little Nightmares. Get the latest news, character guides, co-op strategies, and survival tips.
            </p>
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-value">96%</div>
                <div class="stat-label">Demo Rating</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">Feb 13</div>
                <div class="stat-label">Release Date</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">2</div>
                <div class="stat-label">Playable Characters</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">Co-op</div>
                <div class="stat-label">Game Mode</div>
              </div>
            </div>
          </div>
          <div class="hero-video">
            <div class="video-player">
              <div class="video-thumbnail" v-if="!isVideoPlaying">
                <img
                  src="/images/video-bg.webp"
                  alt="Reanimal Gameplay"
                  class="video-bg-image"
                />
                <div class="video-mask">
                  <span>REANIMAL GAMEPLAY</span>
                </div>
                <div class="play-button" @click="playVideo">▶</div>
              </div>
              <div class="video-iframe" v-else>
                <iframe
                  src="https://www.youtube.com/embed/wjFCUNXkybw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="video-frame"
                ></iframe>
                <button class="close-video" @click="closeVideo">×</button>
              </div>
              <div class="video-info">
                <div class="video-header">
                  <span>Reanimal Community</span>
                  <span class="dot"></span>
                  <span>Gameplay Trailer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Story Section -->
    <section class="home-section">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2 class="section-title">About Reanimal Game</h2>
            <p class="story-description">
              In <strong>Reanimal</strong>, you play as a pair of siblings desperately trying to escape their home, which has been twisted into a nightmarish hellscape. These Reanimal characters must work together to rescue their three missing friends while navigating through a dark, atmospheric world filled with danger and mystery.
            </p>
            <p class="story-description">
              Developed by <strong>Tarsier Studios</strong> using Unreal Engine 5, Reanimal combines survival horror, stealth mechanics, and cinematic platforming in a unique co-op experience. Work together with a friend (or AI companion) to solve environmental puzzles, avoid twisted creatures, and uncover the secrets of the island. Try the Reanimal demo now on Reanimal Steam to experience the game's atmospheric horror before the full release. Learn more about the game's story, mechanics, and features in our comprehensive <a href="/wiki" class="inline-link">Reanimal Wiki</a>.
            </p>
            <div class="story-features">
              <div class="story-feature-item">
                <span class="feature-icon">👥</span>
                <span>Play as siblings working together</span>
              </div>
              <div class="story-feature-item">
                <span class="feature-icon">🔍</span>
                <span>Rescue three missing friends</span>
              </div>
              <div class="story-feature-item">
                <span class="feature-icon">🏝️</span>
                <span>Explore a twisted island</span>
              </div>
              <div class="story-feature-item">
                <span class="feature-icon">🧩</span>
                <span>Solve environmental puzzles</span>
              </div>
            </div>
          </div>
          <div class="story-visual">
            <div class="story-card">
              <div class="story-card-header">
                <span class="story-card-badge">Game Info</span>
              </div>
              <div class="story-card-content">
                <div class="story-card-item">
                  <span class="card-label">Genre</span>
                  <span class="card-value">Survival Horror</span>
                </div>
                <div class="story-card-item">
                  <span class="card-label">Gameplay</span>
                  <span class="card-value">Stealth & Platforming</span>
                </div>
                <div class="story-card-item">
                  <span class="card-label">Engine</span>
                  <span class="card-value">Unreal Engine 5</span>
                </div>
                <div class="story-card-item">
                  <span class="card-label">Mode</span>
                  <span class="card-value">Single & Co-op</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-features">
          <div class="about-feature-item">
            <div class="about-feature-icon">✅</div>
            <div class="about-feature-content">
              <h3>Fan-Created</h3>
              <p>Built by passionate fans, for the Reanimal community. No official affiliation - just pure dedication to helping fellow players.</p>
            </div>
          </div>
          <div class="about-feature-item">
            <div class="about-feature-icon">✅</div>
            <div class="about-feature-content">
              <h3>Fact-Checked</h3>
              <p>All information is verified against official sources and game data. We ensure accuracy in every guide, character profile, and news update.</p>
            </div>
          </div>
          <div class="about-feature-item">
            <div class="about-feature-icon">✅</div>
            <div class="about-feature-content">
              <h3>Spoiler-Free</h3>
              <p>Safe browsing guaranteed. We mark spoilers clearly and provide spoiler-free guides for players who want to discover the story themselves.</p>
            </div>
          </div>
          <div class="about-feature-item">
            <div class="about-feature-icon">✅</div>
            <div class="about-feature-content">
              <h3>Community-Driven</h3>
              <p>Updated daily by our community. Share your discoveries, strategies, and insights to help build the most comprehensive Reanimal resource.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Information Section -->
    <section class="home-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Reanimal Game Information</h2>
        </div>
        
        <!-- Game Information Cards -->
        <div class="info-cards-wrapper">
          <!-- Main Info Card -->
          <div class="info-main-card">
            <div class="info-main-header">
              <h3 class="info-main-title">Game Details</h3>
            </div>
            <div class="info-main-grid">
              <div class="info-main-item">
                <span class="info-main-label">Name</span>
                <span class="info-main-value">REANIMAL</span>
              </div>
              <div class="info-main-item">
                <span class="info-main-label">Genre</span>
                <span class="info-main-value">Adventure, Survival Horror</span>
              </div>
              <div class="info-main-item">
                <span class="info-main-label">Developer</span>
                <span class="info-main-value">Tarsier Studios</span>
              </div>
              <div class="info-main-item">
                <span class="info-main-label">Publisher</span>
                <span class="info-main-value">THQ Nordic, Amplifier Studios</span>
              </div>
              <div class="info-main-item">
                <span class="info-main-label">reanimal game release date</span>
                <span class="info-main-value highlight">February 13, 2026</span>
                <div class="countdown" v-if="daysUntilRelease > 0">
                  <span class="countdown-text">{{ daysUntilRelease }} days to go</span>
                </div>
                <div class="release-note" style="margin-top: 8px; font-size: 0.85rem; color: var(--text-soft);">
                  The Reanimal release date PS5 is February 13, 2026, launching simultaneously across all platforms. Check our <a href="/wiki" class="inline-link">Reanimal Wiki</a> for more details.
                </div>
              </div>
              <div class="info-main-item">
                <span class="info-main-label">Engine</span>
                <span class="info-main-value">Unreal Engine 5</span>
              </div>
              <div class="info-main-item">
                <span class="info-main-label">Game Modes</span>
                <span class="info-main-value">Single Player, Local Co-op, Online Co-op</span>
                <p class="info-main-note" style="margin-top: 8px; font-size: 0.85rem; color: var(--text-soft);">Learn more about <a href="/co-op" class="inline-link">Reanimal co-op modes</a>.</p>
              </div>
              <div class="info-main-item">
                <span class="info-main-label">Rating</span>
                <span class="info-main-value">PEGI 16 / ESRB M (Mature)</span>
              </div>
            </div>
          </div>

          <!-- Platforms & Features & Languages Card -->
          <div class="info-side-card">
            <div class="info-side-section">
              <div class="info-side-header">
                <span class="info-side-icon">🎮</span>
                <span class="info-side-title">Platforms</span>
              </div>
              <div class="platform-icons-compact">
                <span class="platform-icon-compact" title="PlayStation 5">PS5</span>
                <span class="platform-icon-compact" title="Xbox Series X/S">Xbox</span>
                <span class="platform-icon-compact" title="PC/Windows">PC</span>
                <span class="platform-icon-compact" title="Nintendo Switch 2">Switch</span>
              </div>
            </div>
            <div class="info-side-section">
              <div class="info-side-header">
                <span class="info-side-icon">✨</span>
                <span class="info-side-title">Features</span>
              </div>
              <div class="info-features-compact">
                <span class="info-feature-badge">Co-op</span>
                <span class="info-feature-badge">Stealth</span>
                <span class="info-feature-badge">Puzzles</span>
                <span class="info-feature-badge">Platforming</span>
                <span class="info-feature-badge">Horror</span>
                <span class="info-feature-badge">Story</span>
              </div>
            </div>
            <div class="info-side-section">
              <div class="info-side-header">
                <span class="info-side-icon">🌐</span>
                <span class="info-side-title">Languages</span>
              </div>
              <div class="info-languages-compact-content">
                <div class="info-languages-compact-item">
                  <span class="info-languages-compact-label">Interface & Subtitles</span>
                  <span class="info-languages-compact-value">9 languages supported</span>
                </div>
                <div class="info-languages-compact-item">
                  <span class="info-languages-compact-label">Full Audio</span>
                  <span class="info-languages-compact-value">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Platform Availability -->
        <div class="platform-availability">
          <h3 class="platform-availability-title">Reanimal PS5 and Multi-Platform Release</h3>
          <p class="platform-availability-text">
            The <strong>Reanimal release date PS5</strong> is February 13, 2026, with the Reanimal PS5 version launching alongside releases for Xbox Series X/S, PC (Reanimal Steam and Epic Games Store), and Nintendo Switch 2. The Reanimal release date PS5 marks an exciting milestone for PlayStation players. The Reanimal PS5 experience takes full advantage of the console's capabilities, delivering enhanced graphics and smooth performance for the cooperative horror adventure. Pre-order Reanimal Steam version now to secure your copy.
          </p>
        </div>

        <!-- System Requirements -->
        <div class="system-requirements">
          <h3 class="system-requirements-title">System Requirements</h3>
          <div class="system-requirements-grid">
            <!-- Minimum Requirements -->
            <div class="system-requirements-card">
              <div class="system-requirements-header">
                <span class="system-requirements-badge minimum">Minimum</span>
              </div>
              <div class="system-requirements-content">
                <div class="system-requirement-item">
                  <span class="system-requirement-label">OS</span>
                  <span class="system-requirement-value">Windows 10/11</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Processor</span>
                  <span class="system-requirement-value">Ryzen 5 2400G / Core i5-9400F</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Memory</span>
                  <span class="system-requirement-value">8 GB RAM</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Graphics</span>
                  <span class="system-requirement-value">GeForce GTX 1060 / Radeon RX 480</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">DirectX</span>
                  <span class="system-requirement-value">Version 12</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Network</span>
                  <span class="system-requirement-value">Broadband Internet connection</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Storage</span>
                  <span class="system-requirement-value highlight">18 GB available space</span>
                </div>
                <div class="system-requirement-note">
                  <span>Requires 64-bit processor and operating system</span>
                </div>
              </div>
            </div>

            <!-- Recommended Requirements -->
            <div class="system-requirements-card">
              <div class="system-requirements-header">
                <span class="system-requirements-badge recommended">Recommended</span>
              </div>
              <div class="system-requirements-content">
                <div class="system-requirement-item">
                  <span class="system-requirement-label">OS</span>
                  <span class="system-requirement-value">Windows 10/11</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Processor</span>
                  <span class="system-requirement-value">Ryzen 5 3600X / Core i7-7700K</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Memory</span>
                  <span class="system-requirement-value highlight">16 GB RAM</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Graphics</span>
                  <span class="system-requirement-value">GeForce RTX 2060 / Radeon RX 6600XT</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">DirectX</span>
                  <span class="system-requirement-value">Version 12</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Network</span>
                  <span class="system-requirement-value">Broadband Internet connection</span>
                </div>
                <div class="system-requirement-item">
                  <span class="system-requirement-label">Storage</span>
                  <span class="system-requirement-value highlight">18 GB available space</span>
                </div>
                <div class="system-requirement-note">
                  <span>Requires 64-bit processor and operating system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Section -->
    <section class="home-section">
      <div class="container">
        <div class="demo-content">
          <div class="demo-text">
            <h2 class="section-title">Reanimal Demo Available Now - Try Before You Buy</h2>
            <p class="demo-description">
              Experience the dark atmosphere of Reanimal before the full release! The <strong>Reanimal demo</strong> is now available on <strong>Reanimal Steam</strong> and has received overwhelming positive feedback from players. Download the Reanimal demo from Reanimal Steam to experience 15-25 minutes of gameplay featuring the game's core mechanics. The <strong>Reanimal release date PS5</strong> is February 13, 2026, with the full game launching simultaneously across all platforms. The Reanimal demo features multi-language support, allowing players from around the world to enjoy the game in their preferred language.
            </p>
            <div class="demo-stats">
              <div class="demo-stat">
                <div class="demo-stat-value">96%</div>
                <div class="demo-stat-label">Positive Reviews</div>
              </div>
              <div class="demo-stat">
                <div class="demo-stat-value">15-25</div>
                <div class="demo-stat-label">Minutes of Gameplay</div>
              </div>
              <div class="demo-stat">
                <div class="demo-stat-value">700+</div>
                <div class="demo-stat-label">User Reviews</div>
              </div>
            </div>
            <div class="demo-features">
              <div class="demo-feature">
                <span class="check-icon">✓</span>
                <span>Multi-language support (9 languages for interface & subtitles)</span>
              </div>
              <div class="demo-feature">
                <span class="check-icon">✓</span>
                <span>Full English voice acting</span>
              </div>
              <div class="demo-feature">
                <span class="check-icon">✓</span>
                <span>Experience <a href="/co-op" class="inline-link">co-op mechanics</a></span>
              </div>
            </div>
            <div class="demo-actions">
              <a href="" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <span>Download Reanimal Demo</span>
                <span class="btn-arrow">→</span>
              </a>
              <a href="/guides" class="btn-secondary">
                <span>Reanimal Demo Guide</span>
              </a>
            </div>
          </div>
          <div class="demo-visual">
            <div class="demo-card">
              <div class="demo-card-header">
                <span class="demo-badge">Reanimal Steam Demo</span>
                <span class="demo-rating">96% Positive</span>
              </div>
              <div class="demo-card-content">
                <div class="demo-card-title">Try Before You Buy</div>
                <div class="demo-card-description">
                  Get a taste of the horror adventure that awaits. The Reanimal demo showcases the game's atmospheric storytelling, co-op gameplay, and twisted world design. Download the Reanimal demo from Reanimal Steam to experience the full gameplay before the official release. Available in multiple languages for players worldwide.
                </div>
                <div class="demo-card-highlights">
                  <div class="highlight-item">
                    <span class="highlight-icon">🎯</span>
                    <span>Full gameplay experience</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-icon">👥</span>
                    <span><a href="/co-op" class="inline-link">Co-op mode</a> available</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-icon">🌐</span>
                    <span>Multi-language support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Co-op Section -->
    <section class="home-section">
      <div class="container">
        <div class="coop-content">
          <div class="section-header">
            <h2 class="section-title">Co-op & Friend Pass</h2>
            <p class="section-description">Play together with friends or AI companion. Learn more in our complete <a href="/co-op" class="inline-link">Reanimal Co-op Guide</a>.</p>
          </div>
          <div class="coop-grid">
            <div class="coop-card">
              <div class="coop-card-header">
                <div class="coop-icon-wrapper">
                  <div class="coop-icon">👥</div>
                </div>
                <div class="coop-badge">Local</div>
              </div>
              <div class="coop-card-body">
                <h3 class="coop-title">Local Co-op</h3>
                <p class="coop-description">Play together on the same screen. Perfect for couch co-op sessions with friends or family.</p>
                <div class="coop-features">
                  <span class="coop-feature-tag">Same Screen</span>
                  <span class="coop-feature-tag">Couch Play</span>
                </div>
              </div>
            </div>
            <div class="coop-card">
              <div class="coop-card-header">
                <div class="coop-icon-wrapper">
                  <div class="coop-icon">🌐</div>
                </div>
                <div class="coop-badge">Online</div>
              </div>
              <div class="coop-card-body">
                <h3 class="coop-title">Online Co-op</h3>
                <p class="coop-description">Team up with friends online to explore the twisted island together. Cross-play support details coming soon.</p>
                <div class="coop-features">
                  <span class="coop-feature-tag">Online Play</span>
                  <span class="coop-feature-tag">Cross-play</span>
                </div>
              </div>
            </div>
            <div class="coop-card">
              <div class="coop-card-header">
                <div class="coop-icon-wrapper">
                  <div class="coop-icon">🤖</div>
                </div>
                <div class="coop-badge">AI</div>
              </div>
              <div class="coop-card-body">
                <h3 class="coop-title">AI Companion</h3>
                <p class="coop-description">In single-player mode, the other character is controlled by AI, ensuring you never have to face the horrors alone.</p>
                <div class="coop-features">
                  <span class="coop-feature-tag">Solo Mode</span>
                  <span class="coop-feature-tag">AI Partner</span>
                </div>
              </div>
            </div>
          </div>
          <div class="coop-cta">
            <a href="/co-op" class="btn-primary">
              <span>Read Full Co-op Guide</span>
              <span class="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Characters & Monsters Section -->
    <section class="home-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Reanimal Characters & Monsters</h2>
          <p class="section-description">Discover the Reanimal characters - playable siblings and twisted creatures you'll encounter in the game</p>
        </div>
        <div class="characters-grid">
          <div class="character-card">
            <span class="character-badge playable">playable</span>
            <div class="character-image-wrapper">
              <img 
                src="/images/characters-01.webp" 
                alt="The Brother"
                class="character-image"
              />
            </div>
            <div class="character-info">
              <h3 class="character-name">The Brother</h3>
              <p class="character-description">One of the two main Reanimal characters - playable siblings trying to escape the twisted island. Work together with your sister to survive. Learn more about all <a href="/characters" class="inline-link">Reanimal characters</a>.</p>
            </div>
          </div>
          <div class="character-card">
            <span class="character-badge playable">playable</span>
            <div class="character-image-wrapper">
              <img 
                src="/images/characters-02.webp" 
                alt="The Sister"
                class="character-image"
              />
            </div>
            <div class="character-info">
              <h3 class="character-name">The Sister</h3>
              <p class="character-description">The other main Reanimal character, working together with her brother to survive and rescue their missing friends.</p>
            </div>
          </div>
          <div class="character-card">
            <span class="character-badge enemy">enemy</span>
            <div class="character-image-wrapper">
              <img 
                src="/images/characters-03.webp" 
                alt="The Sheep/Lamb"
                class="character-image"
              />
            </div>
            <div class="character-info">
              <h3 class="character-name">The Sheep/Lamb</h3>
              <p class="character-description">A twisted monster that players must avoid or confront on the island. One of the many dangers you'll face.</p>
            </div>
          </div>
        </div>
        <div class="characters-note">
          <p>Plus three missing friends you'll need to rescue throughout your journey. Explore our complete <a href="/characters" class="inline-link">Reanimal characters database</a> to learn more about all the characters and monsters in the game.</p>
        </div>
      </div>
    </section>

    <!-- Little Nightmares Comparison -->
    <section class="home-section">
      <div class="container">
        <div class="comparison-content">
          <div class="section-header">
            <h2 class="section-title">Reanimal vs Little Nightmares</h2>
            <p class="section-description">From the creators of Little Nightmares comes a new horror adventure</p>
          </div>

          <!-- Development Background -->
          <div class="comparison-cards-grid">
            <div class="comparison-card">
              <div class="comparison-card-header">
                <h3 class="comparison-card-title">Little Nightmares</h3>
                <div class="comparison-card-badge">2017-2021</div>
              </div>
              <div class="comparison-details">
                <div class="detail-item">
                  <span class="detail-label">Developer:</span>
                  <span class="detail-value">Tarsier Studios</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Publisher:</span>
                  <span class="detail-value">Bandai Namco</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Engine:</span>
                  <span class="detail-value">Unreal Engine 4</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Game Mode:</span>
                  <span class="detail-value">Single Player</span>
                </div>
              </div>
            </div>

            <div class="comparison-card highlight">
              <div class="comparison-card-header">
                <h3 class="comparison-card-title">Reanimal</h3>
                <div class="comparison-card-badge">2026</div>
              </div>
              <div class="comparison-details">
                <div class="detail-item">
                  <span class="detail-label">Developer:</span>
                  <span class="detail-value">Tarsier Studios</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Publisher:</span>
                  <span class="detail-value">THQ Nordic</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Engine:</span>
                  <span class="detail-value">Unreal Engine 5</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Game Mode:</span>
                  <span class="detail-value">Single & Co-op</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Differences Table -->
          <div class="comparison-table-wrapper">
            <div class="comparison-table">
              <div class="comparison-row header">
                <div class="comparison-cell">Feature</div>
                <div class="comparison-cell">Little Nightmares</div>
                <div class="comparison-cell">Reanimal</div>
              </div>
              <div class="comparison-row">
                <div class="comparison-cell feature">Gameplay</div>
                <div class="comparison-cell">Single Player Focus</div>
                <div class="comparison-cell highlight">Co-op Core Mechanic</div>
              </div>
              <div class="comparison-row">
                <div class="comparison-cell feature">Characters</div>
                <div class="comparison-cell">One Character</div>
                <div class="comparison-cell highlight">Two Characters</div>
              </div>
              <div class="comparison-row">
                <div class="comparison-cell feature">Setting</div>
                <div class="comparison-cell">The Maw</div>
                <div class="comparison-cell highlight">Twisted Island</div>
              </div>
              <div class="comparison-row">
                <div class="comparison-cell feature">Style</div>
                <div class="comparison-cell">Puzzle Platformer</div>
                <div class="comparison-cell highlight">Survival Horror</div>
              </div>
            </div>
          </div>

          <!-- Atmosphere Comparison -->
          <div class="atmosphere-comparison-grid">
            <div class="atmosphere-card">
              <h3 class="atmosphere-title">Little Nightmares</h3>
              <p class="atmosphere-description">
                Dark, stylized visual design with oppressive, claustrophobic environments. Psychological horror through vulnerability and grotesque enemy designs.
              </p>
            </div>
            <div class="atmosphere-card highlight">
              <h3 class="atmosphere-title">Reanimal</h3>
              <p class="atmosphere-description">
                Enhanced horror atmosphere with more intense psychological terror. Shared camera creates deeper claustrophobia and genuine fear.
              </p>
            </div>
          </div>

          <div class="comparison-cta">
            <a href="/vs-little-nightmares" class="btn-secondary">
              <span>Read Full Comparison</span>
              <span class="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="home-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Latest Reanimal News</h2>
          <p class="section-description">Stay updated with the latest announcements and updates</p>
        </div>
        <div class="home-news-list" v-if="homeNews.length > 0">
          <div 
            v-for="item in homeNews" 
            :key="item.id" 
            class="home-news-item"
            @click="goToNews(item.addressBar)"
          >
            <div class="home-news-item-image" v-if="item.imageUrl">
              <img 
                :src="item.imageUrl" 
                :alt="item.imageAlt || item.title" 
                class="home-news-image"
                loading="lazy"
              />
            </div>
            <div class="home-news-item-content">
              <h3 class="home-news-title">{{ item.title }}</h3>
              <p class="home-news-description">{{ item.description }}</p>
              <div class="home-news-tags" v-if="item.tags && item.tags.length > 0">
                <span v-for="tag in item.tags" :key="tag" class="home-news-tag">{{ tag }}</span>
              </div>
              <div class="home-news-footer">
                <span class="home-news-date">{{ formatDate(item.publishDate) }}</span>
                <span class="home-news-link">Read More →</span>
              </div>
            </div>
          </div>
        </div>
        <div class="news-cta">
          <a href="/news" class="btn-secondary">View All News</a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="home-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">When is Reanimal releasing?</h3>
            <p class="faq-answer">Reanimal is scheduled to release on February 13, 2026, for PlayStation 5, Xbox Series X/S, Windows PC, and Nintendo Switch 2.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Is there a demo available?</h3>
            <p class="faq-answer">Yes! The Reanimal demo is available on Steam now. It offers 15-25 minutes of gameplay and has received 96% positive reviews. Check out our <a href="/guides" class="inline-link">Reanimal guides</a> for tips and walkthroughs.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Does Reanimal support co-op?</h3>
            <p class="faq-answer">Yes, Reanimal supports both local and online co-op modes. In single-player mode, the other character is controlled by AI. Learn more about co-op mechanics in our <a href="/co-op" class="inline-link">Reanimal Co-op Guide</a>.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Who developed Reanimal?</h3>
            <p class="faq-answer">Reanimal is developed by Tarsier Studios, the creators of Little Nightmares series, and published by THQ Nordic.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">What platforms will Reanimal be on?</h3>
            <p class="faq-answer">Reanimal will be available on PlayStation 5, Xbox Series X/S, Windows PC, and Nintendo Switch 2.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Is Reanimal related to Little Nightmares?</h3>
            <p class="faq-answer">While Reanimal is developed by the same studio (Tarsier Studios), it is a new IP with its own story and characters. However, it shares similar dark, atmospheric horror elements. Read our detailed <a href="/vs-little-nightmares" class="inline-link">Reanimal vs Little Nightmares comparison</a> to learn more.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNewsData } from '../composables/useNewsData'

const router = useRouter()
const { news, loading, error, loadHomeNewsOnly } = useNewsData()

const homeNews = computed(() => news.value || [])

const releaseDate = new Date('2026-02-13')
const today = new Date()
const daysUntilRelease = computed(() => {
  const diffTime = releaseDate - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays > 0 ? diffDays : 0
})

const isVideoPlaying = ref(false)

const playVideo = () => {
  isVideoPlaying.value = true
}

const closeVideo = () => {
  isVideoPlaying.value = false
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const goToNews = (addressBar) => {
  if (addressBar) {
    router.push(`/news${addressBar}`)
  } else {
    router.push('/news')
  }
}

onMounted(() => {
  loadHomeNewsOnly()
})
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  position: relative;
}

/* Section Styles */
.hero-section{
  padding: 60px 0;
  position: relative;
  z-index: 1;
}

.home-section{
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 32px;
}


.section-description {
  color: var(--text-soft);
  font-size: 0.95rem;
  margin: 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  text-align: left;
}

.hero-badge {
  display: inline-block;
  padding: 5px 15px;
  border-radius: 999px;
  border: 1px solid rgba(220, 38, 38, 0.6);
  background: rgba(220, 38, 38, 0.2);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
}

.hero-title {
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.2;
  /* 渐变：血红色到深色背景 */
  background: linear-gradient(135deg, var(--gradient-light) 0%, var(--gradient-light-soft) 30%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  filter: drop-shadow(0 0 8px rgba(139, 0, 0, 0.5)) 
          drop-shadow(0 0 16px rgba(139, 0, 0, 0.3))
          drop-shadow(0 0 24px rgba(160, 0, 0, 0.2));
}

.hero-subtitle {
  font-size: 0.9rem;
  color: var(--text-soft);
  line-height: 1.5;
  margin-bottom: 20px;
}

.hero-subtitle strong {
  color: var(--accent);
  font-weight: 700;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.stat-item {
  text-align: left;
  padding: 10px 15px;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-item:hover {
  border-color: rgba(220, 38, 38, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(220, 38, 38, 0.3);
}

.stat-value {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 5px;
  line-height: 1.2;
  text-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Hero Video */
.hero-video {
  display: flex;
  justify-content: center;
}

.video-player {
  background: rgba(20, 5, 5, 0.95);
  border: 1px solid rgba(220, 38, 38, 0.4);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(220, 38, 38, 0.3);
  width: 100%;
}

.video-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.video-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.video-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 5, 0, 0.5), rgba(15, 10, 5, 0.7));
  z-index: 1;
  pointer-events: none;
}

.video-mask {
  position: relative;
  z-index: 2;
  border: 1px solid rgba(220, 38, 38, 0.4);
  padding: 20px 30px;
  text-align: center;
  letter-spacing: 0.3em;
  color: rgba(220, 38, 38, 0.9);
  font-size: 0.8rem;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
}

.play-button {
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.95);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0 4px 16px rgba(220, 38, 38, 0.5);
}

.play-button:hover {
  transform: scale(1.1);
  background: rgba(220, 38, 38, 1);
  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.7);
}

.video-iframe {
  position: relative;
  aspect-ratio: 16 / 9;
}

.video-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.close-video {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: background 0.3s ease;
  z-index: 10;
}

.close-video:hover {
  background: rgba(0, 0, 0, 0.9);
}

.video-info {
  padding: 10px 15px;
  border-top: 1px solid rgba(220, 38, 38, 0.25);
  background: rgba(15, 3, 3, 0.6);
}

.video-header {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 0.75rem;
  color: var(--text-soft);
}

.video-header .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.6);
}

.story-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: start;
  margin-bottom: 20px;
}

/* 统一的 h2 标题样式 - 血红色恐怖氛围 */
.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 20px;
  line-height: 1.2;
  /* 渐变：白色到血红色，营造恐怖血腥感 */
  background: linear-gradient(135deg, var(--gradient-light) 0%, var(--gradient-light-soft) 30%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  filter: drop-shadow(0 0 6px rgba(139, 0, 0, 0.5)) 
          drop-shadow(0 0 12px rgba(139, 0, 0, 0.3))
          drop-shadow(0 0 18px rgba(160, 0, 0, 0.2));
}

.story-description {
  font-size: 0.9rem;
  color: var(--text-soft);
  line-height: 1.5;
  margin-bottom: 15px;
}

.story-description strong {
  color: var(--accent);
  font-weight: 700;
}

.story-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.story-feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  color: var(--text);
  font-weight: 500;
}

.story-feature-item .feature-icon {
  font-size: 1.5rem;
}

.story-visual {
  position: sticky;
  top: 100px;
}

.story-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.story-card-header {
  padding: 20px;
  background: rgba(59, 130, 246, 0.1);
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

.story-card-badge {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid rgba(220, 38, 38, 0.4);
  border-radius: 8px;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
}

.story-card-content {
  padding: 24px;
}

.story-card-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
}

.story-card-item:last-child {
  border-bottom: none;
}

.card-label {
  color: var(--text-soft);
  font-size: 0.9rem;
}

.card-value {
  color: var(--accent);
  font-weight: 700;
  font-size: 1rem;
}

/* About Section */
.about-section {
  padding: 60px 0;
}

.about-master-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.about-visual {
  position: relative;
}

.about-image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  display: block;
  border: 2px solid rgba(59, 130, 246, 0.3);
  transition: transform 0.3s ease;
}

.about-image-wrapper:hover .about-image {
  transform: scale(1.05);
}

.about-image-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 3;
}

.badge-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.5));
}

.about-image-badge span:last-child {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}

.about-text {
  text-align: left;
}

.about-badge {
  display: inline-flex;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(220, 38, 38, 0.4);
  background: rgba(220, 38, 38, 0.1);
  color: var(--accent);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
}


.about-description {
  font-size: 0.9rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 20px;
}

.about-description strong {
  color: var(--accent);
  font-weight: 700;
}

.inline-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(220, 38, 38, 0.3);
  transition: all 0.3s ease;
}

.inline-link:hover {
  color: var(--accent-soft);
  border-bottom-color: var(--accent);
  text-shadow: 0 0 8px rgba(220, 38, 38, 0.5);
}

.about-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.about-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 15px;
  background: rgba(220, 38, 38, 0.05);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.about-feature-item:hover {
  border-color: rgba(220, 38, 38, 0.4);
  background: rgba(220, 38, 38, 0.1);
  transform: translateY(-2px);
}

.about-feature-icon {
  flex-shrink: 0;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
}

.about-feature-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 5px;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.4),
    0 0 12px rgba(139, 0, 0, 0.3),
    0 0 18px rgba(160, 0, 0, 0.2);
}

.about-feature-content p {
  font-size: 0.8rem;
  color: var(--text-soft);
  line-height: 1.5;
  margin: 0;
}

.about-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.pill {
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: var(--text);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.pill:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

/* Game Information Cards */
.info-cards-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
}

.info-main-card {
  background: rgba(25, 5, 5, 0.7);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 28px;
  backdrop-filter: blur(10px);
}

.info-main-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
}

.info-main-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.4),
    0 0 12px rgba(139, 0, 0, 0.3);
}

.info-main-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.info-main-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-main-label {
  color: var(--text-soft);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-main-value {
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

.info-main-value.highlight {
  color: var(--accent);
  font-weight: 700;
  font-size: 1.1rem;
}

.info-side-card {
  background: rgba(25, 5, 5, 0.7);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: start;
}

.info-side-section {
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  backdrop-filter: none;
}

.info-side-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
}

.info-side-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.4));
}

.info-side-title {
  color: var(--text);
  font-size: 1.1rem;
  font-weight: 700;
}

.platform-icons-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.platform-icon-compact {
  padding: 5px 10px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  transition: all 0.3s ease;
}

.platform-icon-compact:hover {
  border-color: var(--accent);
  background: rgba(220, 38, 38, 0.2);
  transform: translateY(-2px);
}

.info-features-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.info-feature-badge {
  padding: 5px 10px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  transition: all 0.3s ease;
}

.info-feature-badge:hover {
  border-color: var(--accent);
  background: rgba(220, 38, 38, 0.2);
  transform: translateY(-2px);
}


.info-languages-compact-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.4));
}

.info-languages-compact-title {
  color: var(--text);
  font-size: 1.1rem;
  font-weight: 700;
}

.info-languages-compact-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-languages-compact-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-languages-compact-label {
  color: var(--text-soft);
  font-size: 0.85rem;
  font-weight: 500;
}

.info-languages-compact-value {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
}

/* Platform Availability */
.platform-availability {
  margin: 40px 0 32px;
  padding: 24px;
  background: rgba(25, 5, 5, 0.7);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.platform-availability-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.4),
    0 0 12px rgba(139, 0, 0, 0.3);
}

.platform-availability-text {
  color: var(--text-soft);
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

/* System Requirements */
.system-requirements-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 32px;
  text-align: center;
  /* 外发光效果 */
  text-shadow: 
    0 0 8px rgba(139, 0, 0, 0.5),
    0 0 16px rgba(139, 0, 0, 0.3),
    0 0 24px rgba(160, 0, 0, 0.2);
}

.system-requirements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.system-requirements-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.system-requirements-card:hover {
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.15);
}

.system-requirements-header {
  padding: 20px;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

.system-requirements-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.system-requirements-badge.minimum {
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.4);
  color: var(--cool-blue);
}

.system-requirements-badge.recommended {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.4);
  color: #4ade80;
}

.system-requirements-content {
  padding: 24px;
}

.system-requirement-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 0;
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
  gap: 16px;
}

.system-requirement-item:last-of-type {
  border-bottom: none;
}

.system-requirement-label {
  color: var(--text-soft);
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 100px;
  flex-shrink: 0;
}

.system-requirement-value {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  text-align: right;
  flex: 1;
}

.system-requirement-value.highlight {
  color: var(--accent);
  font-weight: 700;
}

.system-requirement-note {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  text-align: center;
}

.system-requirement-note span {
  color: var(--text-soft);
  font-size: 0.85rem;
  font-style: italic;
}

.countdown {
  margin-top: 12px;
  padding: 6px 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  display: inline-block;
}

.countdown-text {
  color: var(--cool-blue);
  font-weight: 600;
  font-size: 0.85rem;
}

.platform-icons {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 16px 0;
}

.platform-icon {
  padding: 10px 20px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
  transition: all 0.3s ease;
}

.platform-icon:hover {
  border-color: var(--accent);
  background: rgba(220, 38, 38, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
}

/* Demo Section */
.demo-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.demo-description {
  font-size: 0.9rem;
  color: var(--text-soft);
  line-height: 1.5;
  margin-bottom: 20px;
}

.demo-description strong {
  color: var(--accent);
  font-weight: 700;
}

.demo-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.demo-stat {
  text-align: center;
  padding: 15px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
}

.demo-stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1.2;
}

.demo-stat-label {
  font-size: 0.85rem;
  color: var(--text-soft);
}

.demo-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.demo-feature {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
}

.check-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.4);
  border-radius: 50%;
  color: #4ade80;
  font-weight: 700;
  font-size: 0.9rem;
}

.demo-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-visual {
  position: sticky;
  top: 100px;
}

.demo-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.demo-card-header {
  padding: 20px;
  background: rgba(59, 130, 246, 0.1);
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-badge {
  padding: 6px 12px;
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid rgba(220, 38, 38, 0.4);
  border-radius: 8px;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
}

.demo-rating {
  padding: 6px 12px;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.4);
  border-radius: 8px;
  color: #4ade80;
  font-size: 0.85rem;
  font-weight: 600;
}

.demo-card-content {
  padding: 24px;
}

.demo-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.4),
    0 0 12px rgba(139, 0, 0, 0.3),
    0 0 18px rgba(160, 0, 0, 0.2);
}

.demo-card-description {
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 24px;
}

.demo-card-highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
}

.highlight-icon {
  font-size: 1.2rem;
}

/* Co-op Section */
.coop-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.coop-card {
  background: rgba(25, 5, 5, 0.8);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  position: relative;
}

.coop-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.coop-card:hover {
  border-color: rgba(220, 38, 38, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(220, 38, 38, 0.2);
}

.coop-card:hover::before {
  opacity: 1;
}

.coop-card-header {
  position: relative;
  padding: 30px 20px 0 20px;
  background: linear-gradient(180deg, rgba(220, 38, 38, 0.1) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.coop-icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 38, 38, 0.1);
  border: 2px solid rgba(220, 38, 38, 0.3);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.coop-card:hover .coop-icon-wrapper {
  background: rgba(220, 38, 38, 0.2);
  border-color: rgba(220, 38, 38, 0.5);
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(220, 38, 38, 0.4);
}

.coop-icon {
  font-size: 2.5rem;
  display: block;
  filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.5));
  transition: transform 0.4s ease;
}

.coop-card:hover .coop-icon {
  transform: scale(1.1);
}

.coop-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid rgba(220, 38, 38, 0.4);
  border-radius: 20px;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.3);
}

.coop-card-body {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.coop-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.4),
    0 0 12px rgba(139, 0, 0, 0.3),
    0 0 18px rgba(160, 0, 0, 0.2);
}

.coop-description {
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
  font-size: 0.95rem;
}

.coop-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: auto;
}

.coop-feature-tag {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.coop-card:hover .coop-feature-tag {
  background: rgba(220, 38, 38, 0.2);
  border-color: rgba(220, 38, 38, 0.4);
  transform: translateY(-2px);
}

.coop-cta {
  text-align: center;
}

/* Characters Section */
.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.character-card {
  position: relative;
  background: rgba(25, 5, 5, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
}

.character-card:hover {
  border-color: rgba(220, 38, 38, 0.5);
  box-shadow: 0 20px 60px rgba(220, 38, 38, 0.2);
  transform: translateY(-8px) scale(1.02);
}

.character-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 2;
  backdrop-filter: blur(10px);
}

.character-badge.playable {
  background: rgba(34, 197, 94, 0.25);
  border: 1px solid rgba(34, 197, 94, 0.5);
  color: #4ade80;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
}

.character-badge.enemy {
  background: rgba(220, 38, 38, 0.25);
  border: 1px solid rgba(220, 38, 38, 0.5);
  color: #f87171;
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
}

.character-image-wrapper {
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  background: rgba(20, 5, 5, 0.8);
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.character-card:hover .character-image {
  transform: scale(1.1);
}

.character-info {
  padding: 20px;
}

.character-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 10px;
  /* 渐变：血红色到深色背景 */
  background: linear-gradient(135deg, var(--gradient-light) 0%, var(--gradient-light-soft) 30%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  filter: drop-shadow(0 0 6px rgba(139, 0, 0, 0.5)) 
          drop-shadow(0 0 12px rgba(139, 0, 0, 0.3))
          drop-shadow(0 0 18px rgba(160, 0, 0, 0.2));
}

.character-description {
  color: var(--text-soft);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.characters-note {
  text-align: center;
  padding: 24px;
  background: rgba(220, 38, 38, 0.05);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
}

.characters-note p {
  color: var(--text-soft);
  font-size: 1rem;
  margin: 0;
}

/* Comparison Section */
.comparison-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* Development Background Cards */
.comparison-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.comparison-card {
  background: rgba(25, 5, 5, 0.8);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.comparison-card:hover {
  border-color: rgba(220, 38, 38, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(220, 38, 38, 0.15);
}

.comparison-card.highlight {
  border-color: rgba(220, 38, 38, 0.4);
  background: rgba(25, 5, 5, 0.9);
  position: relative;
}

.comparison-card.highlight::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
}

.comparison-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
}

.comparison-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.4),
    0 0 12px rgba(139, 0, 0, 0.3);
}

.comparison-card-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid rgba(220, 38, 38, 0.4);
  border-radius: 20px;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.comparison-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.detail-label {
  color: var(--text-soft);
  font-size: 0.9rem;
  font-weight: 500;
}

.detail-value {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  text-align: right;
}

/* Comparison Table */
.comparison-table-wrapper {
  margin-bottom: 40px;
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(25, 5, 5, 0.6);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  overflow: hidden;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  border-bottom: 1px solid rgba(220, 38, 38, 0.1);
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row.header {
  background: rgba(220, 38, 38, 0.1);
  border-bottom: 2px solid rgba(220, 38, 38, 0.3);
}

.comparison-cell {
  padding: 16px 20px;
  color: var(--text);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.comparison-row.header .comparison-cell {
  font-weight: 700;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.85rem;
}

.comparison-cell.feature {
  font-weight: 600;
  color: var(--text);
}

.comparison-cell.highlight {
  color: var(--accent);
  font-weight: 600;
}

/* Atmosphere Comparison */
.atmosphere-comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.atmosphere-card {
  background: rgba(25, 5, 5, 0.7);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.atmosphere-card:hover {
  border-color: rgba(220, 38, 38, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(220, 38, 38, 0.15);
}

.atmosphere-card.highlight {
  border-color: rgba(220, 38, 38, 0.4);
  background: rgba(25, 5, 5, 0.9);
}

.atmosphere-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.4),
    0 0 12px rgba(139, 0, 0, 0.3);
}

.atmosphere-description {
  color: var(--text-soft);
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

.comparison-cta {
  text-align: center;
}

/* News Section */
.home-news-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.home-news-item {
  background: rgba(25, 5, 5, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.home-news-item:hover {
  transform: translateY(-2px);
  border-color: rgba(220, 38, 38, 0.4);
  box-shadow: 0 15px 35px rgba(220, 38, 38, 0.2);
}

.home-news-item-image {
  width: 300px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(20, 5, 5, 0.8);
  flex-shrink: 0;
}

.home-news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.home-news-item:hover .home-news-image {
  transform: scale(1.05);
}

.home-news-item-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.home-news-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 10px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.home-news-description {
  color: var(--text-soft);
  line-height: 1.6;
  margin: 0 0 12px 0;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.home-news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.home-news-tag {
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.home-news-item:hover .home-news-tag {
  border-color: rgba(220, 38, 38, 0.5);
  background: rgba(220, 38, 38, 0.15);
}

.home-news-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(220, 38, 38, 0.1);
  margin-top: auto;
}

.home-news-date {
  color: var(--text-soft);
  font-size: 0.85rem;
}

.home-news-link {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.home-news-item:hover .home-news-link {
  color: var(--accent-soft);
  transform: translateX(4px);
}

.news-cta {
  text-align: center;
}

.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.faq-item {
  background: rgba(25, 5, 5, 0.7);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.faq-item:hover {
  border-color: rgba(220, 38, 38, 0.5);
  box-shadow: 0 8px 24px rgba(220, 38, 38, 0.1);
}

.faq-question {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 12px;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  text-shadow: 
    0 0 6px rgba(139, 0, 0, 0.5),
    0 0 12px rgba(139, 0, 0, 0.3),
    0 0 18px rgba(160, 0, 0, 0.2);
}

.faq-answer {
  color: var(--text-soft);
  line-height: 1.7;
  margin: 0;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 36px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  font-size: 1rem;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #1a0a00;
  box-shadow: 0 8px 24px rgba(220, 38, 38, 0.4);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(220, 38, 38, 0.6);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  font-size: 1rem;
  border: 1px solid rgba(220, 38, 38, 0.5);
  color: var(--text);
  background: rgba(220, 38, 38, 0.1);
}

.btn-secondary:hover {
  background: rgba(220, 38, 38, 0.2);
  border-color: var(--accent);
  transform: translateY(-3px);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

/* Responsive - 1024px */
@media (max-width: 1024px) {
  /* Hero Section */
  .hero-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-video {
    order: -1;
  }

  /* Story Section */
  .story-content {
    grid-template-columns: 1fr;
  }

  .story-visual {
    position: static;
  }

  /* About Section */
  .about-master-card {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 28px;
  }

  .about-visual {
    order: -1;
  }

  .about-features {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Info Section */
  .info-cards-wrapper {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .info-main-card {
    grid-row: span 1;
  }

  .info-main-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .system-requirements-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  /* Demo Section */
  .demo-content {
    grid-template-columns: 1fr;
  }

  .demo-visual {
    position: static;
  }

  /* Co-op Section */
  .coop-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .coop-card-header {
    padding: 28px 20px 20px;
  }

  .coop-icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .coop-icon {
    font-size: 2.2rem;
  }

  .coop-card-body {
    padding: 20px;
  }

  .coop-title {
    font-size: 1.3rem;
  }

  /* Comparison Section */
  .comparison-cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* News Section */
  .home-news-item-image {
    width: 250px;
    min-width: 250px;
    height: 180px;
  }

  .comparison-table-wrapper {
    overflow-x: auto;
  }

  .comparison-table {
    min-width: 600px;
  }

  .comparison-row {
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  .comparison-cell {
    padding: 12px 16px;
    font-size: 0.85rem;
  }

  .atmosphere-comparison-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* Responsive - 768px */
@media (max-width: 768px) {
  /* Global */
  section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 0.9rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero-text {
    text-align: center;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .stat-item {
    padding: 12px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  /* Story Section */
  .story-features {
    grid-template-columns: 1fr;
  }

  /* About Section */
  .about-master-card {
    padding: 20px 16px;
  }

  .about-description {
    font-size: 0.9rem;
  }

  .about-features {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .about-pills {
    gap: 6px;
  }

  .pill {
    font-size: 0.75rem;
    padding: 4px 10px;
  }

  /* Info Section */
  .info-basic-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .info-basic-card {
    padding: 24px 20px;
  }

  .info-basic-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 0;
  }

  .info-basic-label {
    min-width: auto;
  }

  .info-basic-value {
    text-align: left;
  }

  .system-requirements-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .system-requirements-title {
    font-size: 1.5rem;
  }

  .system-requirements-content {
    padding: 20px;
  }

  .system-requirement-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 0;
  }

  .system-requirement-label {
    min-width: auto;
  }

  .system-requirement-value {
    text-align: left;
  }

  /* Demo Section */
  .demo-stats {
    grid-template-columns: 1fr;
  }

  /* Co-op Section */
  .coop-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .coop-card-header {
    padding: 24px 20px 18px;
  }

  .coop-icon-wrapper {
    width: 65px;
    height: 65px;
  }

  .coop-icon {
    font-size: 2rem;
  }

  .coop-card-body {
    padding: 18px;
  }

  .coop-title {
    font-size: 1.2rem;
  }

  .coop-description {
    font-size: 0.9rem;
  }

  /* Characters Section */
  .characters-grid {
    grid-template-columns: 1fr;
  }

  /* Comparison Section */
  .comparison-cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .comparison-card {
    padding: 20px;
  }

  .comparison-card-title {
    font-size: 1.3rem;
  }

  .comparison-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .detail-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .detail-value {
    text-align: left;
  }

  .comparison-cell {
    padding: 10px 12px;
    font-size: 0.85rem;
  }

  .atmosphere-card {
    padding: 20px;
  }

  .atmosphere-title {
    font-size: 1.2rem;
  }

  .atmosphere-description {
    font-size: 0.9rem;
  }

  /* News Section */
  .home-news-item {
    flex-direction: column;
  }

  .home-news-item-image {
    width: 100%;
    min-width: 100%;
    height: 200px;
  }

  .home-news-item-content {
    padding: 18px;
  }

  .home-news-title {
    font-size: 1.1rem;
  }

  .home-news-description {
    font-size: 0.9rem;
  }
}
</style>
 