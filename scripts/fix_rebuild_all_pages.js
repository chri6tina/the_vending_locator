const fs = require('fs')
const path = require('path')
const { buildPage } = require('./build_complete_pages')

function main() {
  const root = path.join(__dirname, '..')
  const leadsRoot = path.join(root, 'src', 'app', 'vending-leads')
  if (!fs.existsSync(leadsRoot)) {
    console.error('vending-leads directory not found')
    process.exit(1)
  }
  const dirs = fs.readdirSync(leadsRoot, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)
  let updated = 0
  dirs.forEach(dir => {
    const page = path.join(leadsRoot, dir, 'page.tsx')
    if (fs.existsSync(page)) {
      const res = buildPage(page)
      if (res && res.updated) updated++
    }
  })
  console.log(`Rebuilt pages: ${updated}`)
}

if (require.main === module) main()


