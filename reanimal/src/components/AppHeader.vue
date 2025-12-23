<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <a href="/" class="logo" @click="closeMenu">
          <img src="/images/logo.webp" alt="Reanimal Logo" class="logo-image">
          <span class="logo-text">Reanimal</span>
        </a>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        </button>
        <div class="menu-overlay" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
        <nav class="nav-links" :class="{ open: isMenuOpen }">
          <a href="/" @click="closeMenu">Home</a>
          <a href="/wiki" @click="closeMenu">Wiki</a>
          <a href="/co-op" @click="closeMenu">Co-op</a>
          <a href="/guides" @click="closeMenu">Guides</a>
          <a href="/characters" @click="closeMenu">Characters</a>
          <a href="/vs-little-nightmares" @click="closeMenu">Vs Little Nightmares</a>
          <a href="/news" @click="closeMenu">News</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  gap: 10px;
}

.logo-image {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
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

.logo:hover .logo-text {
  /* 悬停时轻微增强外发光 */
  filter: drop-shadow(0 0 10px rgba(139, 0, 0, 0.6)) 
          drop-shadow(0 0 20px rgba(139, 0, 0, 0.4))
          drop-shadow(0 0 30px rgba(160, 0, 0, 0.3));
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 21;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: rgba(229, 231, 235, 0.8);
  transition: all 0.3s ease;
  border-radius: 2px;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translateY(7px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-7px);
}

.nav-links {
  display: flex;
  gap: 8px;
  font-size: 0.95rem;
}

.nav-links a {
  color: rgba(229, 231, 235, 0.7);
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-links a:hover {
  color: #fff;
  border-color: rgba(220, 38, 38, 0.4);
  background: rgba(220, 38, 38, 0.15);
  box-shadow: 0 0 12px rgba(220, 38, 38, 0.3);
}

.menu-overlay {
  display: none;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .nav-links {
    gap: 6px;
    font-size: 0.9rem;
  }

  .nav-links a {
    padding: 10px 14px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 19;
  }

  .menu-overlay.open {
    opacity: 1;
    visibility: visible;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.95));
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 24px 24px;
    gap: 0;
    transition: right 0.3s ease;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
    z-index: 20;
    overflow-y: auto;
    backdrop-filter: blur(10px);
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid rgba(59, 130, 246, 0.2);
    font-size: 1rem;
  }

  .nav-links a:hover {
    background: rgba(220, 38, 38, 0.2);
    border-color: rgba(220, 38, 38, 0.4);
  }
}
</style>




