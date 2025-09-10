// Cleanup script to remove the "recent purchase" UI on city pages
// - Sets recentPurchases to an empty array
// - Wraps the desktop and mobile notification blocks with a conditional so they don't render

const fs = require('fs')
const path = require('path')

const root = process.cwd()
const baseDir = path.join(root, 'src', 'app', 'vending-leads')

/** Read all page.tsx files under vending-leads */
function getPageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getPageFiles(full))
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(full)
    }
  }
  return files
}

function setRecentPurchasesEmpty(src) {
  // Replace any initialization array with a typed empty array
  const pattern = /const \[recentPurchases,\s*setRecentPurchases\] = useState\(\s*\[[\s\S]*?\]\s*\)/
  if (pattern.test(src)) {
    return src.replace(
      pattern,
      'const [recentPurchases, setRecentPurchases] = useState<string[]>([])'
    )
  }
  // Also handle non-typed empty array => add typing for consistency
  const emptyPattern = /const \[recentPurchases,\s*setRecentPurchases\] = useState\(\s*\[\s*\]\s*\)/
  if (emptyPattern.test(src)) {
    return src.replace(
      emptyPattern,
      'const [recentPurchases, setRecentPurchases] = useState<string[]>([])'
    )
  }
  return src
}

function wrapNextMotionDivAfterComment(src, commentMarker) {
  const idx = src.indexOf(commentMarker)
  if (idx === -1) return src

  // Avoid double-wrapping
  const lookahead = src.slice(idx, idx + 500)
  if (lookahead.includes('recentPurchases.length > 0')) return src

  const before = src.slice(0, idx)
  const after = src.slice(idx)

  // Find the first <motion.div after the comment
  const motionOpenIdx = after.indexOf('<motion.div')
  if (motionOpenIdx === -1) return src
  const blockStart = idx + motionOpenIdx

  // Find the corresponding closing tag
  const motionCloseIdx = src.indexOf('</motion.div>', blockStart)
  if (motionCloseIdx === -1) return src
  const blockEnd = motionCloseIdx + '</motion.div>'.length

  const block = src.slice(blockStart, blockEnd)
  const wrapped = `${commentMarker}\n{recentPurchases.length > 0 && (\n${block}\n)}`

  return before + wrapped + src.slice(blockEnd)
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8')
  let updated = original

  // 1) Empty the recentPurchases list
  updated = setRecentPurchasesEmpty(updated)

  // 2) Wrap desktop notification
  updated = wrapNextMotionDivAfterComment(
    updated,
    '{/* Recent Purchase Notification */}'
  )

  // 3) Wrap mobile notification
  updated = wrapNextMotionDivAfterComment(
    updated,
    '{/* Mobile Recent Purchase Notification */}'
  )

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8')
    return true
  }
  return false
}

function run() {
  const files = getPageFiles(baseDir)
  let changed = 0
  for (const f of files) {
    if (processFile(f)) changed += 1
  }
  console.log(`Processed ${files.length} files. Updated ${changed}.`)
}

run()


