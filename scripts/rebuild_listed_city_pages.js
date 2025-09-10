const fs = require('fs')
const path = require('path')
const { buildPage } = require('./build_complete_pages')

function getListedSlugs(mdPath) {
  const text = fs.readFileSync(mdPath, 'utf8')
  return text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.startsWith('- '))
    .map(l => l.slice(2))
    .filter(Boolean)
}

function main() {
  const mdPath = path.join(process.cwd(), 'NEW_CITY_PAGES.md')
  if (!fs.existsSync(mdPath)) {
    console.error('NEW_CITY_PAGES.md not found')
    process.exit(1)
  }
  const slugs = getListedSlugs(mdPath)
  const root = path.join(__dirname, '..')
  const leadsRoot = path.join(root, 'src', 'app', 'vending-leads')
  let updated = 0
  slugs.forEach(slug => {
    const file = path.join(leadsRoot, slug, 'page.tsx')
    if (fs.existsSync(file)) {
      const res = buildPage(file)
      if (res && res.updated) updated++
    }
  })
  console.log(`Rebuilt listed pages: ${updated}`)
}

if (require.main === module) main()


