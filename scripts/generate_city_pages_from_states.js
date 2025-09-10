const fs = require('fs')
const path = require('path')

// Reuse builder to write full page content once the file exists
const { buildPage } = require('./build_complete_pages')

function parseCitySlugs(statesTs) {
  // Very simple parser to extract all slug values inside city objects
  // Matches patterns like: { name: 'X', slug: 'some-slug' }
  const citySlugRegex = /\{\s*name:\s*'[^']+'\s*,\s*slug:\s*'([^']+)'\s*\}/g
  const slugs = new Set()
  let m
  while ((m = citySlugRegex.exec(statesTs))) {
    slugs.add(m[1])
  }
  return Array.from(slugs)
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true })
}

function main() {
  const projectRoot = path.join(__dirname, '..')
  const statesPath = path.join(projectRoot, 'src', 'data', 'states.ts')
  const leadsRoot = path.join(projectRoot, 'src', 'app', 'vending-leads')

  if (!fs.existsSync(statesPath)) {
    console.error('Could not find src/data/states.ts')
    process.exit(1)
  }
  ensureDir(leadsRoot)

  const statesTs = fs.readFileSync(statesPath, 'utf8')
  const citySlugs = parseCitySlugs(statesTs)

  // Build state name map to correctly split multi-word states
  const stateMap = (function buildStateMap() {
    const stateRegex = /name:\s*'([^']+)'\s*,\s*slug:\s*'([^']+)'/g
    const m = new Map()
    let x
    while ((x = stateRegex.exec(statesTs))) {
      m.set(x[2], x[1])
    }
    return m
  })()

  // Helper to split city slug into city + state using longest matching state slug
  function splitCityAndState(slug) {
    const candidates = Array.from(stateMap.keys()).sort((a, b) => b.length - a.length)
    for (const s of candidates) {
      if (slug.endsWith(s)) {
        const city = slug.slice(0, slug.length - s.length - 1) // remove hyphen
        return { city, stateName: stateMap.get(s) }
      }
    }
    const parts = slug.split('-')
    return { city: parts.slice(0, -1).join('-'), stateName: parts[parts.length - 1] }
  }

  let created = 0
  let skipped = 0
  for (const slug of citySlugs) {
    const dir = path.join(leadsRoot, slug)
    const pageFile = path.join(dir, 'page.tsx')
    if (fs.existsSync(pageFile)) {
      skipped++
      continue
    }
    ensureDir(dir)
    // Create file populated via builder with correct city/state names
    const { city, stateName } = splitCityAndState(slug)
    const content = require('fs').readFileSync(path.join(__dirname, 'build_complete_pages.js'), 'utf8')
    // Reuse buildPage by writing placeholder then invoking
    fs.writeFileSync(pageFile, '', 'utf8')
    const result = buildPage(pageFile)
    if (result && result.updated) {
      created++
    }
  }

  console.log(`\n✅ Created ${created} new city pages. Skipped existing: ${skipped}.`)
}

if (require.main === module) {
  main()
}

module.exports = { parseCitySlugs }


