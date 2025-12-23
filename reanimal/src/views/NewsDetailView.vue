<template>
  <div class="news-detail-view">
    <!-- News Detail Header -->
    <section class="news-detail-header" v-if="newsItem">
      <div class="container">
        <div class="breadcrumb">
          <a href="/news" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            News
          </a>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ newsItem.title }}</span>
        </div>

        <div class="news-detail-content">
          <div class="news-detail-text">
            <h1 class="news-title">{{ newsItem.title }}</h1>

            <div class="news-detail-meta">
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span class="meta-text">{{ formatDate(newsItem.publishDate) }}</span>
              </div>
            </div>

            <div class="news-tags" v-if="newsItem.tags && newsItem.tags.length > 0">
              <span v-for="tag in newsItem.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Content -->
    <section class="news-content" v-if="newsItem">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article" ref="contentRef" v-html="newsItem.detailsHtml"></div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="news-info-box">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ newsItem?.title }}</h3>
              </div>

              <!-- News Image -->
              <div class="news-image" v-if="newsItem.imageUrl">
                <img :src="newsItem.imageUrl" :alt="newsItem.imageAlt || newsItem.title" class="news-image-img">
              </div>

              <!-- News Meta Info -->
              <div class="news-meta">
                <div class="meta-item">
                  <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span class="meta-text">{{ formatDate(newsItem?.publishDate) }}</span>
                </div>
              </div>

              <!-- News Tags -->
              <div class="news-tags" v-if="newsItem?.tags && newsItem.tags.length > 0">
                <span v-for="tag in newsItem.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Other News -->
            <div class="news-navigation" v-if="otherNews && otherNews.length > 0">
              <h4 class="nav-title">Other News</h4>
              <div class="nav-grid">
                <a
                  v-for="item in otherNews"
                  :key="item.id"
                  :href="`/news${item.addressBar}`"
                  class="nav-card"
                >
                  <div class="nav-card-title">{{ item.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(item.publishDate) }}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found -->
    <section class="news-content" v-else>
      <div class="container">
        <div class="not-found">
          <h2>News Not Found</h2>
          <p>The news article you're looking for doesn't exist or has been removed.</p>
          <a href="/news" class="btn-hero btn-secondary">Back to News</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsData } from '../composables/useNewsData'

const route = useRoute()
const idSlug = computed(() => route.params.id || '')
const { news, loadData, findNewsByAddressBar } = useNewsData()
const newsItem = ref(null)
const contentRef = ref(null)

// 初始化加载数据并查找 news
const initNews = async () => {
  await nextTick()
  await loadData()
  newsItem.value = findNewsByAddressBar(`/${idSlug.value}`)
}

onMounted(async () => {
  await initNews()
})

// 监听路由参数变化，更新当前 news
watch(() => route.params.id, async () => {
  await nextTick()
  await loadData()
  newsItem.value = findNewsByAddressBar(`/${idSlug.value}`)
})

const otherNews = computed(() => {
  if (!newsItem.value) return []
  return news.value.filter(n => n.id !== newsItem.value.id).slice(0, 5)
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.news-detail-view {
  min-height: 100vh;
}

/* News Detail Header */
.news-detail-header {
  padding: 80px 0 40px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.875rem;
  color: var(--text-soft);
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  color: var(--text-soft);
}

.breadcrumb-link {
  color: var(--text-soft);
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.breadcrumb-current {
  color: var(--text);
  font-weight: 500;
}

.news-detail-content {
  margin: 0 auto;
}

.news-detail-text {
  margin: 0 auto;
}

/* News Title (H1) */
.news-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 24px 0;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(139, 0, 0, 0.3));
}

.news-detail-meta {
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-soft);
  font-size: 0.9rem;
}

.meta-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
}

.meta-text {
  font-weight: 500;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(220, 38, 38, 0.1);
  color: var(--accent);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(220, 38, 38, 0.3);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(220, 38, 38, 0.2);
  transform: translateY(-1px);
}

/* News Content */
.news-content {
  padding: 0 0 80px;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
}

/* Left Content */
.left-content {
  background: rgba(25, 5, 5, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(220, 38, 38, 0.2);
}

.detail-article {
  color: var(--text-soft);
  line-height: 1.8;
  font-size: 1rem;
}

.detail-article :deep(h2) {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
  margin: 32px 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.detail-article :deep(h3) {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
  margin: 24px 0 12px 0;
}

.detail-article :deep(p) {
  margin: 0 0 16px 0;
  color: var(--text-soft);
}

.detail-article :deep(ul),
.detail-article :deep(ol) {
  margin: 16px 0;
  padding-left: 24px;
}

.detail-article :deep(li) {
  margin-bottom: 8px;
  color: var(--text-soft);
}

.detail-article :deep(strong) {
  color: var(--accent);
  font-weight: 700;
}

.detail-article :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 24px 0;
  border: 1px solid rgba(220, 38, 38, 0.2);
}

.detail-article :deep(code) {
  background: rgba(220, 38, 38, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  color: var(--accent);
}

/* Right Sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.news-info-box {
  background: rgba(25, 5, 5, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  overflow: hidden;
}

.info-box-header {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  padding: 16px;
}

.info-box-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a0a00;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-image {
  padding: 16px;
  text-align: center;
}

.news-image-img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(220, 38, 38, 0.2);
}

.news-meta {
  padding: 16px;
  border-top: 1px solid rgba(220, 38, 38, 0.1);
}

.news-navigation {
  background: rgba(25, 5, 5, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 20px;
}

.nav-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 16px 0;
}

.nav-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-card {
  padding: 12px;
  background: rgba(220, 38, 38, 0.05);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.nav-card:hover {
  background: rgba(220, 38, 38, 0.1);
  border-color: rgba(220, 38, 38, 0.4);
  transform: translateX(4px);
}

.nav-card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.nav-card-meta {
  font-size: 0.75rem;
  color: var(--text-soft);
}

.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 16px;
}

.not-found p {
  color: var(--text-soft);
  margin-bottom: 24px;
}

.btn-hero {
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent);
  color: #1a0a00;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-hero:hover {
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(220, 38, 38, 0.2);
  color: var(--accent);
  border: 1px solid rgba(220, 38, 38, 0.3);
}

.btn-secondary:hover {
  background: rgba(220, 38, 38, 0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .right-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .news-detail-header {
    padding: 60px 0 30px;
  }

  .news-title {
    font-size: 2rem;
  }

  .left-content {
    padding: 20px;
  }

  .news-info-box,
  .news-navigation {
    padding: 16px;
  }

  .detail-article :deep(h2) {
    font-size: 1.5rem;
  }

  .detail-article :deep(h3) {
    font-size: 1.2rem;
  }
}
</style>


