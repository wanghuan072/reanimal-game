import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://reanimalgame.org'
}

// 基础路由配置
const baseRoutes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/wiki', name: 'wiki', priority: 0.9, changefreq: 'weekly' },
  { path: '/co-op', name: 'co-op', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides', name: 'guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/characters', name: 'characters', priority: 0.9, changefreq: 'weekly' },
  { path: '/vs-little-nightmares', name: 'vs-little-nightmares', priority: 0.8, changefreq: 'monthly' },
  { path: '/news', name: 'news', priority: 0.9, changefreq: 'daily' },
  { path: '/privacy-policy', name: 'privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', name: 'terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/copyright', name: 'copyright', priority: 0.3, changefreq: 'yearly' },
  { path: '/about-us', name: 'about-us', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact-us', name: 'contact-us', priority: 0.6, changefreq: 'monthly' }
]

// 动态加载 Guides 数据
async function loadGuidesData() {
  try {
    const dataPath = path.join(__dirname, '../src/data/guides.js')
    if (!fs.existsSync(dataPath)) {
      return []
    }
    const module = await import(`../src/data/guides.js`)
    return module.default || []
  } catch (error) {
    console.warn('Warning: Failed to load guides data:', error.message)
    return []
  }
}

// 动态加载 News 数据
async function loadNewsData() {
  try {
    const dataPath = path.join(__dirname, '../src/data/news.js')
    if (!fs.existsSync(dataPath)) {
      return []
    }
    const module = await import(`../src/data/news.js`)
    return module.default || []
  } catch (error) {
    console.warn('Warning: Failed to load news data:', error.message)
    return []
  }
}

// 生成 URL XML
function generateUrlXml(path, lastmod, priority, changefreq) {
  const roundedPriority = Math.round(priority * 10) / 10
  return `  <url>
    <loc>${seoConfig.fullDomain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

// 生成站点地图
async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 生成基础路由
  baseRoutes.forEach(route => {
    sitemapXml += `\n${generateUrlXml(route.path, lastmod, route.priority, route.changefreq)}`
  })

  // 为 Guides 生成URL
  const guides = await loadGuidesData()
  guides.forEach(guide => {
    if (!guide || !guide.addressBar) return
    const guidePath = guide.addressBar.startsWith('/') 
      ? `/guides${guide.addressBar}` 
      : `/guides/${guide.addressBar}`
    const guideLastmod = guide.publishDate || lastmod
    sitemapXml += `\n${generateUrlXml(guidePath, guideLastmod, 0.8, 'monthly')}`
  })

  // 为 News 生成URL
  const news = await loadNewsData()
  news.forEach(newsItem => {
    if (!newsItem || !newsItem.addressBar) return
    const newsPath = newsItem.addressBar.startsWith('/') 
      ? `/news${newsItem.addressBar}` 
      : `/news/${newsItem.addressBar}`
    const newsLastmod = newsItem.publishDate || lastmod
    sitemapXml += `\n${generateUrlXml(newsPath, newsLastmod, 0.8, 'weekly')}`
  })

  sitemapXml += `\n</urlset>`
  return sitemapXml
}

// 生成并保存站点地图
async function main() {
  try {
    console.log('📦 Loading data...')
    
    console.log('🗺️  Generating sitemap...')
    const sitemapContent = await generateSitemap()
    
    const publicPath = path.join(__dirname, '../public/sitemap.xml')
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    // 确保public目录存在
    const publicDir = path.dirname(publicPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(publicPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    // 如果dist目录存在，也复制一份
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemapContent, 'utf8')
      console.log('✅ Generated sitemap.xml in dist folder')
    }

    const urlCount = (sitemapContent.match(/<url>/g) || []).length
    console.log(`✅ Total URLs in sitemap: ${urlCount}`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml') && 
                      sitemapContent.includes('<urlset') && 
                      sitemapContent.includes('</urlset>')
    
    if (validation) {
      console.log('\n✅ Sitemap validation passed')
    } else {
      console.warn('\n⚠️  Sitemap validation failed')
    }
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

main()

