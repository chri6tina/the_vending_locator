const fs = require('fs')
const path = require('path')

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const original = content

  const hasMarker = content.includes('Recent Purchase Notification') || content.includes('Mobile Recent Purchase Notification')
  if (!hasMarker) return false

  // Remove desktop recent purchase notification block
  content = content.replace(/\{\s*\/\*\s*Recent Purchase Notification\s*\*\/([\s\S]*?)<\/motion\.div>\s*/g, '')

  // Remove mobile recent purchase notification block
  content = content.replace(/\/\*\s*Mobile Recent Purchase Notification\s*\*\/[\s\S]*?<\/div>\s*/g, '')

  // Replace coral CTA with navy
  content = content.replaceAll('bg-coral hover:bg-coral/90', 'bg-navy hover:bg-navy/90')

  // Ensure border on buttons that are navy
  content = content.replace(/(bg-navy hover:bg-navy\/90[^"']*)(")/g, (_m, p1, p2) => {
    if (p1.includes('border')) return p1 + p2
    return p1 + ' border border-white/20' + p2
  })

  const changed = content !== original
  if (changed) fs.writeFileSync(filePath, content, 'utf8')
  return changed
}

function main() {
  const root = path.join(__dirname, '..')
  const leadsRoot = path.join(root, 'src', 'app', 'vending-leads')
  const dirs = fs.readdirSync(leadsRoot, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)
  let changedCount = 0
  dirs.forEach(dir => {
    const file = path.join(leadsRoot, dir, 'page.tsx')
    if (fs.existsSync(file)) {
      if (processFile(file)) changedCount++
    }
  })
  console.log(`Updated pages: ${changedCount}`)
}

if (require.main === module) main()


