<template>
  <div class="guides-view">
    <!-- Guide Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">📖</span>
            <span class="badge-text">Strategy Guides</span>
          </div>
          <h1 class="page-title">Reanimal Strategy Guides & Walkthroughs</h1>
          <div class="page-title-decoration"></div>
          <p class="page-subtitle">
            Master Reanimal Game with our comprehensive guides. From beginner tips to advanced strategies, learn how to survive the twisted island, solve puzzles, and rescue your missing friends in Reanimal Game. Available on Reanimal PS5, Reanimal Steam, and other platforms. Try the Reanimal demo to practice with the <a href="/characters" class="inline-link">Reanimal characters</a>. Learn more about <a href="/co-op" class="inline-link">co-op strategies</a> and check our <a href="/wiki" class="inline-link">Reanimal Wiki</a> for complete game information.
          </p>
        </div>
      </div>
    </section>

    <!-- Guide List -->
    <section class="page-section">
      <div class="container">
        <h2 class="info-title" style="margin-bottom: 16px;">All Guides</h2>

        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>Loading guides...</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>Error loading guides: {{ error }}</p>
        </div>
        
        <!-- All Guides -->
        <div class="guides-grid" v-if="!loading && !error && allGuides.length > 0">
          <div 
            v-for="guide in allGuides" 
            :key="guide.id" 
            class="guide-card"
            @click="goToGuide(guide.addressBar)"
          >
            <div class="guide-image-container" v-if="guide.imageUrl">
              <img 
                :src="guide.imageUrl" 
                :alt="guide.imageAlt || guide.title" 
                class="guide-image"
                loading="lazy"
              />
            </div>
            <div class="guide-card-content">
              <h3 class="guide-title">{{ guide.title }}</h3>
              <p class="guide-description">{{ guide.description }}</p>
              <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="guide-footer">
                <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                <span class="view-link">Read More →</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!loading && !error && allGuides.length === 0" class="empty-state">
          <p>No guides available yet. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="page-section">
      <div class="container">
        <h2 class="info-title">About Reanimal Guides</h2>
        <div class="info-content">
          <p>
            Welcome to Reanimal Guides, your comprehensive resource for mastering Reanimal Game - the upcoming horror adventure game from Tarsier Studios. Our collection of guides covers everything from beginner basics to advanced strategies, helping players at all skill levels improve their Reanimal Game gameplay.
          </p>
          <p>
            Whether you're just starting out and need help with the tutorial, or you're preparing for the Reanimal release date PS5 and want to master <a href="/co-op" class="inline-link">co-op strategies</a>, our guides provide step-by-step walkthroughs, proven strategies, and expert insights for Reanimal Game. Try the Reanimal demo on Reanimal Steam to practice with the <a href="/characters" class="inline-link">Reanimal characters</a> before the full release. Learn more in our <a href="/wiki" class="inline-link">Reanimal Wiki</a>.
          </p>

          <h3 class="info-subtitle">What You'll Find in Our Guides</h3>
          <ul class="info-list">
            <li><strong>Beginner Guides</strong> - Perfect for new players. Learn the fundamentals of co-op gameplay, stealth, puzzle-solving, and progression.</li>
            <li><strong>Stealth Guides</strong> - Master the art of staying hidden. Learn enemy detection patterns and stealth techniques.</li>
            <li><strong>Puzzle Solutions</strong> - Step-by-step solutions for environmental puzzles, including cooperative puzzle mechanics.</li>
            <li><strong>Co-op Strategies</strong> - Advanced tactics for cooperative play, communication techniques, and role assignment.</li>
            <li><strong>Reanimal Characters Guides</strong> - Learn how to maximize each <a href="/characters" class="inline-link">Reanimal character's</a> abilities and use them effectively.</li>
          </ul>

          <h3 class="info-subtitle">How to Use Our Guides</h3>
          <ol class="info-list">
            <li><strong>Browse by Topic</strong> - Use the guide cards above to find guides relevant to your current needs. Each guide is tagged with relevant topics.</li>
            <li><strong>Follow Step-by-Step</strong> - Our guides are designed to be followed sequentially. Read through the entire guide first, then follow the steps.</li>
            <li><strong>Use Our Wiki</strong> - Cross-reference our <a href="/wiki" class="inline-link">wiki database</a> for detailed information about characters, monsters, and mechanics.</li>
            <li><strong>Check Co-op Guide</strong> - Visit our <a href="/co-op" class="inline-link">co-op guide</a> for detailed information about cooperative gameplay.</li>
            <li><strong>Stay Updated</strong> - Check back regularly as we add new guides and update existing ones.</li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useGuideData } from '../composables/useGuideData'

const { guides, loading, error, loadData } = useGuideData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 所有指南
const allGuides = computed(() => {
  return guides.value || []
})

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  window.location.href = `/guides${path}`
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return `Updated ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })}`
}
</script>

<style scoped>
.guides-view {
  min-height: 100vh;
  padding-bottom: 80px;
}

/* Page header styles are now in global.css */

.guides-section {
  padding: 40px 0 60px 0;
}

.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-soft);
}

.error-state {
  color: #ff6b6b;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 auto;
}

.guide-card {
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
  flex-direction: column;
}

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(220, 38, 38, 0.4);
  box-shadow: 0 15px 35px rgba(220, 38, 38, 0.2);
}

.guide-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(20, 5, 5, 0.8);
}

.guide-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image {
  transform: scale(1.05);
}

.guide-card-content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.guide-title {
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

.guide-description {
  color: var(--text-soft);
  line-height: 1.5;
  margin: 0 0 12px 0;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.tag {
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.guide-card:hover .tag {
  border-color: rgba(220, 38, 38, 0.5);
  background: rgba(220, 38, 38, 0.15);
}

.guide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(220, 38, 38, 0.1);
  margin-top: auto;
}

.update-date {
  color: var(--text-soft);
  font-size: 0.85rem;
}

.view-link {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.guide-card:hover .view-link {
  color: var(--accent-soft);
  transform: translateX(4px);
}

/* About Section */
.info-section {
  margin-top: 40px;
  padding: 32px 0 50px;
}

.info-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(220, 38, 38, 0.3);
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.info-content {
  margin: 0 auto;
}

.info-content > p {
  font-size: 1rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin: 0 0 14px 0;
}

.info-content strong {
  color: var(--accent);
  font-weight: 700;
}

.info-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin: 24px 0 12px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.info-list li {
  font-size: 0.95rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
}

.info-list li::before {
  content: '•';
  color: var(--accent);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.info-content ol {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  counter-reset: step-counter;
}

.info-content ol li {
  font-size: 0.95rem;
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 16px;
  padding-left: 32px;
  position: relative;
  counter-increment: step-counter;
}

.info-content ol li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #1a0a00;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.85rem;
}

.inline-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.inline-link:hover {
  color: var(--accent-soft);
  border-bottom-color: var(--accent-soft);
  text-decoration: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 0 40px;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .guides-section {
    padding: 40px 0;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .guide-card-content {
    padding: 16px;
  }

  .guide-title {
    font-size: 1.1rem;
  }

  .guide-description {
    font-size: 0.9rem;
  }

  .tag {
    font-size: 0.75rem;
    padding: 3px 10px;
  }

  .info-title {
    font-size: 1.5rem;
  }

  .info-subtitle {
    font-size: 1.25rem;
  }
}
</style>

