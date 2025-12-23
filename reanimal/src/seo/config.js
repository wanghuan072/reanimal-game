// SEO配置文件
export const seoConfig = {
  // 域名配置
  domain: 'reanimalgame.org',
  fullDomain: 'https://reanimalgame.org',
  protocol: 'https://',

  // 社交媒体配置
  social: {
    twitter: '@reanimalgame',
    facebook: 'reanimalgame',
    instagram: 'reanimalgame',
    discord: 'reanimalgame'
  },

  // 默认SEO设置
  defaults: {
    title: 'Reanimal Wiki, Release Date, Co-op & Game Guide | ReanimalGame.org',
    description: 'The #1 unofficial Reanimal resource. Comprehensive guide on the confirmed release date, co-op multiplayer details, demo walkthrough, and wiki database.',
    keywords: 'reanimal game, reanimal wiki, reanimal release date, reanimal guide, reanimal org',
    author: 'Reanimal Game Community',
    image: 'https://reanimalgame.org/images/logo.webp',
    type: 'website'
  },

  // 页面优先级设置
  priorities: {
    home: 1.0,
    wiki: 0.9,
    'co-op': 0.9,
    guides: 0.9,
    'guide-detail': 0.8,
    characters: 0.9,
    'vs-little-nightmares': 0.8,
    news: 0.9,
    'news-detail': 0.8,
    'privacy-policy': 0.3,
    'terms-of-service': 0.3,
    'copyright': 0.3,
    'about-us': 0.6,
    'contact-us': 0.6
  },

  // 更新频率设置
  changefreq: {
    home: 'weekly',
    wiki: 'weekly',
    'co-op': 'weekly',
    guides: 'weekly',
    'guide-detail': 'monthly',
    characters: 'weekly',
    'vs-little-nightmares': 'monthly',
    news: 'daily',
    'news-detail': 'weekly',
    'privacy-policy': 'yearly',
    'terms-of-service': 'yearly',
    'copyright': 'yearly',
    'about-us': 'monthly',
    'contact-us': 'monthly'
  }
}

