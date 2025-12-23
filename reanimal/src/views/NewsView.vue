<template>
  <div class="news-view">
    <!-- News Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">📰</span>
            <span class="badge-text">Latest News</span>
          </div>
          <h1 class="page-title">Reanimal News & Updates</h1>
          <div class="page-title-decoration"></div>
          <p class="page-subtitle">
            Stay updated with the latest Reanimal Game news, announcements, trailers, and updates from Tarsier Studios. Get all the information about Reanimal release date PS5, Reanimal demo, Reanimal Steam updates, <a href="/characters" class="inline-link">Reanimal characters</a>, and more. Check our <a href="/wiki" class="inline-link">Reanimal Wiki</a> for comprehensive game information and <a href="/guides" class="inline-link">strategy guides</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- News List -->
    <section class="page-section">
      <div class="container">
        <h2 class="info-title" style="margin-bottom: 16px;">All News</h2>

        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>Loading news...</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>Error loading news: {{ error }}</p>
        </div>
        
        <!-- All News -->
        <div class="news-list" v-if="!loading && !error && allNews.length > 0">
          <div 
            v-for="item in allNews" 
            :key="item.id" 
            class="news-item"
            @click="goToNews(item.addressBar)"
          >
            <div class="news-item-image" v-if="item.imageUrl">
              <img 
                :src="item.imageUrl" 
                :alt="item.imageAlt || item.title" 
                class="news-image"
                loading="lazy"
              />
            </div>
            <div class="news-item-content">
              <h3 class="news-title">{{ item.title }}</h3>
              <p class="news-description">{{ item.description }}</p>
              <div class="news-tags" v-if="item.tags && item.tags.length > 0">
                <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="news-footer">
                <span class="publish-date">{{ formatDate(item.publishDate) }}</span>
                <span class="view-link">Read More →</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!loading && !error && allNews.length === 0" class="empty-state">
          <p>No news available yet. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="page-section">
      <div class="container">
        <h2 class="info-title">About Reanimal News</h2>
        <div class="info-content">
          <p>
            Welcome to Reanimal News, your source for the latest updates, announcements, and information about Reanimal Game - the upcoming cooperative horror adventure game from Tarsier Studios.
          </p>
          <p>
            We provide comprehensive coverage of all Reanimal Game-related news, including Reanimal release date PS5, Reanimal demo updates, Reanimal Steam news, <a href="/characters" class="inline-link">Reanimal characters</a> reveals, gameplay reveals, developer interviews, trailer releases, and community updates. Stay informed about everything happening in the world of Reanimal Game. Check our <a href="/wiki" class="inline-link">Reanimal Wiki</a> for complete game information.
          </p>

          <h3 class="info-subtitle">What You'll Find</h3>
          <ul class="info-list">
            <li><strong>Release Information</strong> - Get the latest news about Reanimal release date PS5, pre-orders, and launch details for Reanimal PS5, Reanimal Steam, and other platforms.</li>
            <li><strong>Gameplay Reveals</strong> - Discover new gameplay mechanics, features, and content as they're announced.</li>
            <li><strong>Developer Updates</strong> - Read interviews and behind-the-scenes content from Tarsier Studios.</li>
            <li><strong>Trailer Releases</strong> - Watch and read about new trailers and gameplay footage.</li>
            <li><strong>Community News</strong> - Stay updated on community events, updates, and announcements.</li>
          </ul>

          <h3 class="info-subtitle">Stay Connected</h3>
          <p>
            For the latest Reanimal news and updates, check back regularly. You can also visit our <a href="/wiki" class="inline-link">wiki</a> for detailed game information, or check out our <a href="/guides" class="inline-link">guides</a> for gameplay tips and strategies.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useNewsData } from '../composables/useNewsData'

const { news, loading, error, loadData } = useNewsData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 所有新闻
const allNews = computed(() => {
  return news.value || []
})

const goToNews = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  window.location.href = `/news${path}`
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}
</script>

<style scoped>
.news-view {
  min-height: 100vh;
  padding-bottom: 80px;
}

/* Page header styles are now in global.css */

.page-subtitle strong {
  color: var(--accent);
}

.news-section {
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

.news-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
}

.news-item {
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

.news-item:hover {
  transform: translateY(-2px);
  border-color: rgba(220, 38, 38, 0.4);
  box-shadow: 0 15px 35px rgba(220, 38, 38, 0.2);
}

.news-item-image {
  width: 300px;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(20, 5, 5, 0.8);
  flex-shrink: 0;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-item:hover .news-image {
  transform: scale(1.05);
}

.news-item-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.news-title {
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

.news-description {
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

.news-tags {
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

.news-item:hover .tag {
  border-color: rgba(220, 38, 38, 0.5);
  background: rgba(220, 38, 38, 0.15);
}

.news-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(220, 38, 38, 0.1);
  margin-top: auto;
}

.publish-date {
  color: var(--text-soft);
  font-size: 0.85rem;
}

.view-link {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.news-item:hover .view-link {
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
  margin-bottom: 12px;
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
  .news-item-image {
    width: 250px;
    min-width: 250px;
  }

  .news-item-content {
    padding: 20px;
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

  .news-section {
    padding: 40px 0;
  }

  .news-list {
    gap: 20px;
  }

  .news-item {
    flex-direction: column;
  }

  .news-item-image {
    width: 100%;
    min-width: 100%;
    height: 200px;
  }

  .news-item-content {
    padding: 16px;
  }

  .news-title {
    font-size: 1.1rem;
  }

  .news-description {
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

