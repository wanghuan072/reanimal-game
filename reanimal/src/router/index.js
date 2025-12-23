import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Reanimal Wiki, Release Date, Co-op & Game Guide | ReanimalGame.org',
        description: 'The #1 unofficial Reanimal resource. Comprehensive guide on the confirmed release date, co-op multiplayer details, demo walkthrough, and wiki database.',
        keywords: 'reanimal game, reanimal wiki, reanimal release date, reanimal guide, reanimal org'
      }
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('../views/WikiView.vue'),
      meta: {
        title: 'Reanimal Wiki: Gameplay, Story, Co-op & System Specs',
        description: 'The essential Reanimal Wiki. Full breakdown of gameplay mechanics, story setting, co-op features, character roster, release info, and PC system requirements.',
        keywords: 'reanimal wiki, reanimal gameplay mechanics, reanimal system requirements, reanimal story setting, reanimal game overview, reanimal specs'
      }
    },
    {
      path: '/co-op',
      name: 'co-op',
      component: () => import('../views/CoopView.vue'),
      meta: {
        title: 'Reanimal Co-op Guide: Modes, Mechanics & Cross-Play',
        description: "Master Reanimal's co-op. Full guide on local & online modes, the shared cinematic camera system, character roles, strategies, and cross-play support details.",
        keywords: 'reanimal co-op modes, reanimal cross-play, reanimal shared camera, reanimal character abilities, reanimal coop mechanics, reanimal multiplayer guide'
      }
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('../views/GuidesView.vue'),
      meta: {
        title: 'Reanimal Guides Hub: Walkthroughs, Tips & Strategies',
        description: 'Browse the complete collection of Reanimal game guides. Access full walkthroughs, puzzle solutions, collectible locations, achievement tips, and survival strategies.',
        keywords: 'reanimal guides, reanimal walkthrough, reanimal strategy guide, reanimal puzzle solutions, reanimal achievements, reanimal tips'
      }
    },
    {
      path: '/guides/:id',
      name: 'guide-detail',
      component: () => import('../views/GuideDetailView.vue'),
      meta: {
        title: 'Reanimal Guide',
        description: 'Detailed guide about Reanimal game strategies, tips, and techniques.',
        keywords: 'reanimal guide, reanimal strategy, reanimal tips, reanimal tutorial, reanimal walkthrough'
      }
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersView.vue'),
      meta: {
        title: 'Reanimal Characters: Playable Duo, Monsters & Friends',
        description: 'Meet the cast of Reanimal. Profiles on the playable Brother & Sister, the Missing Friends, list of Monsters & Enemies, and character relationship analysis.',
        keywords: 'reanimal characters, reanimal monsters, reanimal playable characters, reanimal enemies, reanimal missing friends, reanimal lore'
      }
    },
    {
      path: '/vs-little-nightmares',
      name: 'vs-little-nightmares',
      component: () => import('../views/VsLittleNightmaresView.vue'),
      meta: {
        title: 'Reanimal vs Little Nightmares: Comparison, Differences & Lore',
        description: 'Reanimal vs Little Nightmares deep dive. Compare gameplay mechanics, horror atmosphere, story connections, shared elements, and our verdict on which to play.',
        keywords: 'reanimal vs little nightmares, little nightmares 3, tarsier studios games, reanimal gameplay comparison, reanimal shared universe, horror game comparison'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
      meta: {
        title: 'Reanimal News: Latest Updates, Leaks & Release Info',
        description: 'The central hub for Reanimal game news. Read breaking announcements, release date updates, leak analysis, dev logs, and patch notes for the horror adventure.',
        keywords: 'reanimal news, reanimal updates, reanimal leaks, reanimal release date, reanimal patch notes, tarsier studios updates'
      }
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: () => import('../views/NewsDetailView.vue'),
      meta: {
        title: 'Reanimal News: Latest Updates, Leaks & Release Info',
        description: 'The central hub for Reanimal game news. Read breaking announcements, release date updates, leak analysis, dev logs, and patch notes for the horror adventure.',
        keywords: 'reanimal news, reanimal updates, reanimal announcement'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/legal/PrivacyPolicyView.vue'),
      meta: {
        title: 'Privacy Policy - Reanimal Game - reanimalgame.org',
        description: 'Privacy Policy for Reanimal Game Community. Learn how we collect, use, and protect your personal information when you visit our website.',
        keywords: 'privacy policy, Reanimal game, data protection, privacy'
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/legal/TermsOfServiceView.vue'),
      meta: {
        title: 'Terms of Service - Reanimal Game - reanimalgame.org',
        description: 'Terms of Service for Reanimal Game Community. Read our terms and conditions for using our website and services.',
        keywords: 'terms of service, Reanimal game, terms and conditions, user agreement'
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/legal/CopyrightView.vue'),
      meta: {
        title: 'Copyright - Reanimal Game - reanimalgame.org',
        description: 'Copyright information for Reanimal Game Community. Learn about our copyright policies and intellectual property rights.',
        keywords: 'copyright, Reanimal game, intellectual property, DMCA, fair use'
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/legal/AboutUsView.vue'),
      meta: {
        title: 'About Us - Reanimal Game - reanimalgame.org',
        description: 'Learn about Reanimal Game Community, an unofficial community resource for Reanimal game. Discover our mission, what we offer, and how we help players.',
        keywords: 'about Reanimal Game Community, Reanimal game community, Reanimal resources, Reanimal fan site'
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/legal/ContactUsView.vue'),
      meta: {
        title: 'Contact Us - Reanimal Game - reanimalgame.org',
        description: 'Contact Reanimal Game Community. Get in touch with us for questions, suggestions, feedback, or inquiries about our website and services.',
        keywords: 'contact Reanimal Game Community, Reanimal game support, Reanimal community contact'
      }
    }
  ],
})

// 路由守卫：更新页面标题和meta信息
router.beforeEach(async (to, from, next) => {
  // 如果是guide详情页，动态加载guide数据并更新meta
  if (to.name === 'guide-detail' && to.params.id) {
    try {
      // 直接导入数据文件
      const guidesModule = await import('../data/guides.js')
      const guides = guidesModule.default || []
      const guide = guides.find(g => g.addressBar === `/${to.params.id}`)
      
      if (guide && guide.seo) {
        // 更新meta信息
        to.meta.title = guide.seo.title || guide.title
        to.meta.description = guide.seo.description || guide.description
        to.meta.keywords = guide.seo.keywords || ''
      } else if (guide) {
        // 如果没有seo信息，使用默认值
        to.meta.title = guide.title || to.meta.title
        to.meta.description = guide.description || to.meta.description
      }
    } catch (error) {
      console.error('Error loading guide meta:', error)
    }
  }
  
  // 如果是news详情页，动态加载news数据并更新meta
  if (to.name === 'news-detail' && to.params.id) {
    try {
      // 直接导入数据文件
      const newsModule = await import('../data/news.js')
      const news = newsModule.default || []
      const newsItem = news.find(n => n.addressBar === `/${to.params.id}`)
      
      if (newsItem && newsItem.seo) {
        // 更新meta信息
        to.meta.title = newsItem.seo.title || newsItem.title
        to.meta.description = newsItem.seo.description || newsItem.description
        to.meta.keywords = newsItem.seo.keywords || ''
      } else if (newsItem) {
        // 如果没有seo信息，使用默认值
        to.meta.title = newsItem.title || to.meta.title
        to.meta.description = newsItem.description || to.meta.description
      }
    } catch (error) {
      console.error('Error loading news meta:', error)
    }
  }
  
  // useAutoSEO 会自动处理所有 SEO 标签的更新（包括 title, description, keywords, Open Graph, Twitter Cards, Canonical URL, 结构化数据）
  // 这里只需要确保 route.meta 中的数据已准备好即可
  next()
})

export default router
