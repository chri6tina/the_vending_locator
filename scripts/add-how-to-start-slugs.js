const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const statesFile = path.join(root, 'src/data/states.ts')
const outputFile = path.join(root, 'src/data/how-to-start-slugs.ts')
const cityPagesDir = path.join(root, 'src/app/_city-pages/how-to-start-a-vending-machine-business')
const vendingLeadsFile = path.join(root, 'src/data/vending-leads-cities.ts')
const vendingServicesFile = path.join(root, 'src/data/vending-services-cities.ts')
const taxServicesFile = path.join(root, 'src/data/tax-services-cities.ts')

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

const readExistingHowToStartSlugs = () => {
  if (!fs.existsSync(outputFile)) return []
  const raw = fs.readFileSync(outputFile, 'utf8')
  const slugRegex = /"([^"]+)"/g
  const slugs = new Set()
  let match
  while ((match = slugRegex.exec(raw))) {
    slugs.add(match[1])
  }
  return Array.from(slugs)
}

const { citySlugs: stateCitySlugs, stateSlugs } = readStatesData()
const existingExtras = readExistingHowToStartSlugs()
const cityDirs = readCityDirs()
const existingHowToStart = new Set([
  ...stateCitySlugs,
  ...existingExtras,
  ...cityDirs
])

const candidates = [
  ...readSlugsFromDataFile(vendingLeadsFile),
  ...readSlugsFromDataFile(vendingServicesFile),
  ...readSlugsFromDataFile(taxServicesFile)
]

const uniqueCandidates = Array.from(new Set(candidates)).filter((slug) => !existingHowToStart.has(slug))
const stateSlugsByLength = [...stateSlugs].sort((a, b) => b.length - a.length)

const resolveStateSlug = (slug) => {
  for (const stateSlug of stateSlugsByLength) {
    if (slug.endsWith(`-${stateSlug}`)) return stateSlug
  }
  return null
}

const buildVariants = (slug) => {
  if (!slug) return []
  if (slug.includes('-metro-') || slug.includes('-greater-') || slug.includes('-county-')) return []
  const stateSlug = resolveStateSlug(slug)
  if (!stateSlug) return []
  const cityPart = slug.slice(0, -(stateSlug.length + 1))
  if (!cityPart) return []
  const variants = [
    `${cityPart}-metro-${stateSlug}`,
    `${cityPart}-greater-${stateSlug}`
  ]
  if (!cityPart.endsWith('county') && !cityPart.includes('-county')) {
    variants.push(`${cityPart}-county-${stateSlug}`)
  }
  return variants
}
const targetCount = Number(process.env.COUNT || '1000')
const selectedSet = new Set()

for (const slug of uniqueCandidates) {
  if (selectedSet.size >= targetCount) break
  selectedSet.add(slug)
}

if (selectedSet.size < targetCount) {
  const baseSlugs = Array.from(stateCitySlugs).sort((a, b) => a.localeCompare(b))
  for (const baseSlug of baseSlugs) {
    if (selectedSet.size >= targetCount) break
    const variants = buildVariants(baseSlug)
    for (const variant of variants) {
      if (selectedSet.size >= targetCount) break
      if (existingHowToStart.has(variant)) continue
      selectedSet.add(variant)
    }
  }
}

const selected = Array.from(selectedSet)
const combined = Array.from(new Set([...existingExtras, ...selected])).sort((a, b) => a.localeCompare(b))

const fileBody = [
  '// Auto-generated list of additional how-to-start slugs',
  'export const howToStartSlugs = [',
  ...combined.map((slug) => `  "${slug}",`),
  '] as const',
  '',
  'export type HowToStartSlug = typeof howToStartSlugs[number]'
].join('\n')

fs.writeFileSync(outputFile, fileBody, 'utf8')
console.log(`Wrote ${selected.length} new slugs. Total extras: ${combined.length}.`)
