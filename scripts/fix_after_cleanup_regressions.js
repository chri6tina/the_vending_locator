// Fix regressions introduced by cleanup: restore mobile wrapper div and guard effect
const fs = require('fs')
const path = require('path')

const root = process.cwd()
const baseDir = path.join(root, 'src', 'app', 'vending-leads')

function getPageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...getPageFiles(full))
    else if (entry.isFile() && entry.name === 'page.tsx') files.push(full)
  }
  return files
}

function fixMobileWrapper(src) {
  const marker = '{/* Mobile Recent Purchase Notification */}'
  const idx = src.indexOf(marker)
  if (idx === -1) return src
  let head = src.slice(0, idx)
  let tail = src.slice(idx + marker.length)

  // Ensure structure: {recentPurchases.length > 0 && ( <div className="sm:hidden ..."> <motion.div>...</motion.div> </div> )}
  const condStart = '{recentPurchases.length > 0 && ('
  const startsWithCond = tail.trimStart().startsWith(condStart)
  if (!startsWithCond) return src

  // Find the first <motion.div after the condition
  const afterCond = tail.slice(tail.indexOf(condStart) + condStart.length)
  const motionIdxLocal = afterCond.indexOf('<motion.div')
  if (motionIdxLocal === -1) return src
  const beforeMotion = afterCond.slice(0, motionIdxLocal)
  const afterMotionStart = afterCond.slice(motionIdxLocal)

  const motionCloseIdx = afterMotionStart.indexOf('</motion.div>')
  if (motionCloseIdx === -1) return src
  const motionBlock = afterMotionStart.slice(0, motionCloseIdx + '</motion.div>'.length)
  let remainder = afterMotionStart.slice(motionCloseIdx + '</motion.div>'.length)

  // Close pattern should be )} possibly followed by stray </div> from previous structure
  // Remove any immediate stray closing </div> after )}
  remainder = remainder.replace(/\)\}\s*<\/div>/, ')}')

  const wrapperOpen = '\n  <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50">\n'
  const wrapperClose = '\n  </div>\n'

  const rebuilt = marker
    + '\n{recentPurchases.length > 0 && ('
    + wrapperOpen
    + motionBlock
    + wrapperClose
    + ')}'
    + remainder

  return head + rebuilt
}

function addEffectGuard(src) {
  // Insert early return into the effect that rotates recentPurchases
  const pattern = /useEffect\(\(\) => \{\s*const interval = setInterval\(/
  if (pattern.test(src)) {
    return src.replace(pattern, 'useEffect(() => {\n    if (recentPurchases.length === 0) return;\n    const interval = setInterval(')
  }
  return src
}

function process(file) {
  const original = fs.readFileSync(file, 'utf8')
  let updated = original
  updated = fixMobileWrapper(updated)
  updated = addEffectGuard(updated)
  if (updated !== original) {
    fs.writeFileSync(file, updated, 'utf8')
    return true
  }
  return false
}

function run() {
  const files = getPageFiles(baseDir)
  let changed = 0
  for (const f of files) {
    if (process(f)) changed++
  }
  console.log(`Processed ${files.length} files. Fixed ${changed}.`)
}

run()


