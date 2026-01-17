const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const statesFile = path.join(root, 'src/data/states.ts')
const outputFile = path.join(root, 'src/data/how-to-start-slugs.ts')
const cityPagesDir = path.join(root, 'src/app/_city-pages/how-to-start-a-vending-machine-business')
const vendingLeadsFile = path.join(root, 'src/data/vending-leads-cities.ts')
const vendingServicesFile = path.join(root, 'src/data/vending-services-cities.ts')

const readStatesData = () => {
  if (!fs.existsSync(statesFile)) return { citySlugs: new Set(), stateSlugs: [] }
  const raw = fs.readFileSync(statesFile, 'utf8')
  const cityRegex = /\{\s*name:\s*'[^']+',\s*slug:\s*'([^']+)'\s*\}/g
  const stateRegex = /name:\s*'[^']+',\s*slug:\s*'([^']+)',\s*cities:\s*\[/g
  const citySlugs = new Set()
  const stateSlugs = new Set()
  let match
  while ((match = cityRegex.exec(raw))) {
    citySlugs.add(match[1])
  }
  while ((match = stateRegex.exec(raw))) {
    stateSlugs.add(match[1])
  }
  return { citySlugs, stateSlugs: Array.from(stateSlugs) }
}

const readCityDirs = () => {
  if (!fs.existsSync(cityPagesDir)) return []
  return fs
    .readdirSync(cityPagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

const readSlugsFromDataFile = (filePath) => {
  if (!fs.existsSync(filePath)) return []
  const raw = fs.readFileSync(filePath, 'utf8')
  const slugRegex = /"([^"]+)":\s*\{/g
  const slugs = new Set()
  let match
  while ((match = slugRegex.exec(raw))) {
    slugs.add(match[1])
  }
  return Array.from(slugs)
}

const { citySlugs: existingSlugs, stateSlugs } = readStatesData()
const stateSlugsByLength = [...stateSlugs].sort((a, b) => b.length - a.length)

const metroize = (slug) => {
  if (!slug || slug.includes('-metro-')) return null
  let matchedState = null
  for (const stateSlug of stateSlugsByLength) {
    if (slug.endsWith(`-${stateSlug}`)) {
      matchedState = stateSlug
      break
    }
  }
  if (!matchedState) return null
  const cityPart = slug.slice(0, -(matchedState.length + 1))
  if (!cityPart) return null
  return `${cityPart}-metro-${matchedState}`
}
const allCityDirs = readCityDirs()
const candidates = []

for (const slug of allCityDirs) {
  if (!existingSlugs.has(slug)) candidates.push(slug)
}

const leadSlugs = readSlugsFromDataFile(vendingLeadsFile)
for (const slug of leadSlugs) {
  if (!existingSlugs.has(slug)) candidates.push(slug)
}

const serviceSlugs = readSlugsFromDataFile(vendingServicesFile)
for (const slug of serviceSlugs) {
  if (!existingSlugs.has(slug)) candidates.push(slug)
}

const unique = Array.from(new Set(candidates)).sort((a, b) => a.localeCompare(b))
const withoutMetro = unique.filter((slug) => !slug.includes('-metro-'))
let preferred = withoutMetro.length >= 1000 ? withoutMetro : unique

if (preferred.length < 1000) {
  const metroCandidates = []
  for (const slug of existingSlugs) {
    const metroSlug = metroize(slug)
    if (!metroSlug) continue
    if (existingSlugs.has(metroSlug)) continue
    metroCandidates.push(metroSlug)
  }
  const expanded = Array.from(new Set([...preferred, ...metroCandidates]))
  preferred = expanded
}

if (preferred.length < 1000) {
  throw new Error(`Only found ${preferred.length} new how-to-start slugs. Need 1000.`)
}

const selected = preferred.slice(0, 1000)

const fileBody = [
  '// Auto-generated list of additional how-to-start slugs',
  'export const howToStartSlugs = [',
  ...selected.map((slug) => `  "${slug}",`),
  '] as const',
  '',
  'export type HowToStartSlug = typeof howToStartSlugs[number]'
].join('\n')

fs.writeFileSync(outputFile, fileBody, 'utf8')
console.log(`Wrote ${selected.length} how-to-start slugs.`)
