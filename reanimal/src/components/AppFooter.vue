<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="Reanimal Logo" class="logo-image">
            <span class="logo-text">Reanimal</span>
          </div>
          <p class="footer-text">
            Comprehensive Reanimal game resources including guides, wiki, character database, and co-op strategies. A fan-created site by fans, for fans.
          </p>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/wiki">Wiki</a></li>
            <li><a href="/co-op">Co-op</a></li>
            <li><a href="/guides">Guides</a></li>
            <li><a href="/characters">Characters</a></li>
            <li><a href="/vs-little-nightmares">vs Little Nightmares</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li><a href="/privacy-policy" rel="noopener noreferrer nofollow">Privacy Policy</a></li>
            <li><a href="/terms-of-service" rel="noopener noreferrer nofollow">Terms of Service</a></li>
            <li><a href="/copyright" rel="noopener noreferrer nofollow">Copyright</a></li>
            <li><a href="/about-us" rel="noopener noreferrer nofollow">About Us</a></li>
            <li><a href="/contact-us" rel="noopener noreferrer nofollow">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 reanimalgame.org. All rights reserved.</p>
        <p>This is an independent fan site created for informational purposes only. Reanimal is a trademark of Tarsier Studios / THQ Nordic. This site is not affiliated with, endorsed by, or connected to Tarsier Studios or THQ Nordic.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  padding: 40px 0 20px 0;
  background: rgba(15, 23, 42, 0.95);
  border-top: 1px solid rgba(59, 130, 246, 0.2);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.logo-image {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  /* 渐变颜色 - 白色到血红色，恐怖血腥氛围 */
  background: linear-gradient(135deg, var(--gradient-light) 0%, var(--gradient-light-soft) 30%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* 外发光效果 - 血红色恐怖氛围，柔和版 */
  filter: drop-shadow(0 0 8px rgba(139, 0, 0, 0.5)) 
          drop-shadow(0 0 16px rgba(139, 0, 0, 0.3))
          drop-shadow(0 0 24px rgba(160, 0, 0, 0.2));
}

.footer-text {
  color: var(--text-soft);
  margin-bottom: 16px;
  line-height: 1.6;
}

.link-column h2 {
  color: var(--accent);
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-column a {
  color: var(--text-soft);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: var(--accent);
}

.footer-badge {
  display: inline-block;
  padding: 4px 8px;
  background: rgba(220, 38, 38, 0.15);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 6px;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 500;
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid rgba(59, 130, 246, 0.15);
  padding-top: 20px;
  color: var(--text-soft);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

/* 平板端 */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

/* 移动端 */
@media (max-width: 768px) {
  .site-footer {
    padding: 30px 0 20px 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .link-column h2 {
    font-size: 1.1rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}
</style>




