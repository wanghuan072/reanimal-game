import { ref } from 'vue'

/**
 * News 数据 composable
 */
export function useNewsData() {
  const newsData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async () => {
    loading.value = true
    error.value = null
    try {
      const module = await import('../data/news.js')
      const news = module.default || []
      newsData.value = Array.isArray(news) ? news : []
    } catch (err) {
      error.value = err.message || 'Failed to load news data'
      newsData.value = []
      console.error('Error loading news data:', err)
    } finally {
      loading.value = false
    }
  }

  /**
   * 仅加载首页需要的新闻数据（isHome: true）
   */
  const loadHomeNewsOnly = async () => {
    loading.value = true
    error.value = null
    try {
      const module = await import('../data/news.js')
      const news = module.default || []
      const allData = Array.isArray(news) ? news : []
      newsData.value = allData.filter(item => item.isHome === true)
    } catch (err) {
      error.value = err.message || 'Failed to load home news'
      newsData.value = []
      console.error('Error loading home news:', err)
    } finally {
      loading.value = false
    }
  }

  const findNewsByAddressBar = (addressBar) => {
    const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
    return newsData.value.find(n => n.addressBar === path) || null
  }

  const findNewsById = (id) => {
    return newsData.value.find(n => n.id === id) || null
  }

  return {
    news: newsData,
    loading,
    error,
    loadData,
    loadHomeNewsOnly,
    findNewsByAddressBar,
    findNewsById
  }
}




