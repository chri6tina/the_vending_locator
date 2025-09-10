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
  const markerIdx = src.indexOf(marker)
  if (markerIdx === -1) return src

  const condStartStr = '{recentPurchases.length > 0 && ('
  const condIdx = src.indexOf(condStartStr, markerIdx)
  if (condIdx === -1) return src

  // If wrapper already present, just try to remove any stray extra closing </div> after )}
  const alreadyWrapped = src.indexOf('sm:hidden fixed bottom-4 left-4 right-4 z-50', condIdx) !== -1

  const motionOpenIdx = src.indexOf('<motion.div', condIdx)
  if (motionOpenIdx === -1) return src
  const motionCloseEnd = src.indexOf('</motion.div>', motionOpenIdx)
  if (motionCloseEnd === -1) return src
  const motionBlockEnd = motionCloseEnd + '</motion.div>'.length

  const afterMotion = src.slice(motionBlockEnd)
  const endCondRel = afterMotion.indexOf(')}')
  if (endCondRel === -1) return src
  const endCondAbs = motionBlockEnd + endCondRel + ')}'.length

  const head = src.slice(0, markerIdx)
  const tail = src.slice(endCondAbs)

  let middle
  if (alreadyWrapped) {
    // Keep existing content from marker to endCond, then clean any immediate stray </div>
    middle = src.slice(markerIdx, endCondAbs)
  } else {
    const wrapperOpen = '\n{recentPurchases.length > 0 && (\n  <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50">\n'
    const wrapperClose = '\n  </div>\n)\}'
    const leading = marker + wrapperOpen
    const motionBlock = src.slice(motionOpenIdx, motionBlockEnd)
    middle = leading + motionBlock + wrapperClose
  }

  // Remove any immediate stray closing </div> right after )}
  let rebuilt = head + middle + tail
  rebuilt = rebuilt.replace(/\)\}\s*<\/div>/, ')}')
  return rebuilt
}

function addEffectGuard(src) {
  // Insert early return into the effect that rotates recentPurchases
  const pattern = /useEffect\(\(\) => \{\s*const interval = setInterval\(/
  if (pattern.test(src)) {
    return src.replace(pattern, 'useEffect(() => {\n    if (recentPurchases.length === 0) return;\n    const interval = setInterval(')
  }
  return src
}

function processCityFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8')
  let updated = original
  updated = fixMobileWrapper(updated)
  updated = addEffectGuard(updated)
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
    if (processCityFile(f)) changed++
  }
  console.log(`Processed ${files.length} files. Fixed ${changed}.`)
}

run()


