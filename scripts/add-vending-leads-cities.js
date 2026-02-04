const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const dataFile = path.join(root, 'src/data/vending-leads-cities.ts')

const sourceFiles = [
  '500_cities_to_create.json',
  'more_cities_to_create.json',
  'new_cities_to_create.json',
  'smaller_cities_to_create.json',
  'next_100_cities.json',
  'next_500_cities.json',
  'remaining_500_cities.json',
  '100_new_cities_to_create.json',
  'final_100_cities.json',
  '100_cities_final_list.json',
  'additional_cities_to_create.json',
  'new_cities_filtered.json',
  'cities_needing_pages.json',
  '100_missing_cities_report.json',
  '50_more_cities_report.json',
  '50_more_cities_expanded_report.json',
  'additional_missing_cities_report.json',
  'missing_major_cities_report.json'
]

const readJson = (filePath) => {
  if (!fs.existsSync(filePath)) return []
  const raw = fs.readFileSync(filePath, 'utf8').trim()
  if (!raw) return []
  try {
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return data
    if (data && Array.isArray(data.missingCities)) return data.missingCities
    return []
  } catch (error) {
    console.error(`Failed to parse ${filePath}:`, error)
    return []
  }
}

const readStatesTs = () => {
  const filePath = path.join(root, 'src/data/states.ts')
  if (!fs.existsSync(filePath)) return { cities: [], stateSlugs: new Set() }
  const raw = fs.readFileSync(filePath, 'utf8')
  const cityRegex = /\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)'\s*\}/g
  const stateRegex = /name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*cities:\s*\[/g
  const cities = []
  const stateSlugs = new Set()
  let match
  while ((match = cityRegex.exec(raw))) {
    cities.push({ name: match[1], slug: match[2] })
  }
  while ((match = stateRegex.exec(raw))) {
    stateSlugs.add(match[2])
  }
  return { cities, stateSlugs }
}

const readCitiesFromTs = (filePath) => {
  if (!fs.existsSync(filePath)) return []
  const raw = fs.readFileSync(filePath, 'utf8')
  const entryRegex = /"([^"]+)":\s*\{\s*"city":\s*"([^"]+)",\s*"state":\s*"([^"]+)",\s*"slug":\s*"([^"]+)"/g
  const entries = []
  let match
  while ((match = entryRegex.exec(raw))) {
    entries.push({
      slug: match[1],
      city: match[2],
      state: match[3]
    })
  }
  return entries
}

const readCityDirs = (dirPath) => {
  if (!fs.existsSync(dirPath)) return []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}
const escapeValue = (value) => String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')

const stateSlugMap = new Map([
  ['new-york', 'New York'],
  ['new-jersey', 'New Jersey'],
  ['new-hampshire', 'New Hampshire'],
  ['new-mexico', 'New Mexico'],
  ['north-carolina', 'North Carolina'],
  ['south-carolina', 'South Carolina'],
  ['north-dakota', 'North Dakota'],
  ['south-dakota', 'South Dakota'],
  ['west-virginia', 'West Virginia'],
  ['rhode-island', 'Rhode Island'],
  ['washington-dc', 'District of Columbia'],
  ['district-of-columbia', 'District of Columbia'],
  ['dc', 'District of Columbia'],
  ['ny', 'New York'],
  ['ca', 'California'],
  ['tx', 'Texas'],
  ['fl', 'Florida'],
  ['il', 'Illinois'],
  ['pa', 'Pennsylvania'],
  ['wa', 'Washington'],
  ['az', 'Arizona'],
  ['ga', 'Georgia'],
  ['mi', 'Michigan'],
  ['oh', 'Ohio'],
  ['nc', 'North Carolina'],
  ['sc', 'South Carolina'],
  ['va', 'Virginia'],
  ['ma', 'Massachusetts'],
  ['md', 'Maryland'],
  ['nj', 'New Jersey'],
  ['ct', 'Connecticut'],
  ['ri', 'Rhode Island'],
  ['mn', 'Minnesota'],
  ['mo', 'Missouri'],
  ['tn', 'Tennessee'],
  ['co', 'Colorado'],
  ['ut', 'Utah'],
  ['or', 'Oregon'],
  ['nv', 'Nevada'],
  ['wi', 'Wisconsin'],
  ['ia', 'Iowa'],
  ['ks', 'Kansas'],
  ['ne', 'Nebraska'],
  ['ok', 'Oklahoma'],
  ['ky', 'Kentucky'],
  ['in', 'Indiana'],
  ['al', 'Alabama'],
  ['ar', 'Arkansas'],
  ['la', 'Louisiana'],
  ['ms', 'Mississippi'],
  ['mt', 'Montana'],
  ['id', 'Idaho'],
  ['wy', 'Wyoming'],
  ['nm', 'New Mexico'],
  ['nh', 'New Hampshire'],
  ['vt', 'Vermont'],
  ['me', 'Maine'],
  ['hi', 'Hawaii'],
  ['ak', 'Alaska'],
  ['sd', 'South Dakota'],
  ['nd', 'North Dakota'],
  ['wv', 'West Virginia'],
  ['de', 'Delaware']
])

const toTitleCase = (value) =>
  value
    .split(' ')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ')

const stateFromSlug = (slug, stateSlugSet) => {
  const parts = slug.split('-').filter(Boolean)
  if (parts.length < 2) return null
  const three = parts.slice(-3).join('-')
  if (stateSlugMap.has(three)) return stateSlugMap.get(three)
  const two = parts.slice(-2).join('-')
  if (stateSlugMap.has(two)) return stateSlugMap.get(two)
  const last = parts[parts.length - 1]
  if (stateSlugSet && !stateSlugSet.has(last)) return null
  return toTitleCase(last)
}

const cityFromSlug = (slug, stateValue) => {
  const parts = slug.split('-').filter(Boolean)
  if (parts.length < 2) return null
  const stateSlug = stateValue
    ? stateValue.toLowerCase().replace(/\s+/g, '-')
    : null
  const cityParts = stateSlug && slug.endsWith(stateSlug)
    ? slug.slice(0, -(stateSlug.length + 1))
    : parts.slice(0, -1).join('-')
  if (!cityParts) return null
  return cityParts
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ')
}

const content = fs.readFileSync(dataFile, 'utf8')
const existingSlugs = new Set()
const slugRegex = /"([^"]+)":\s*\{/g
let match
while ((match = slugRegex.exec(content))) {
  existingSlugs.add(match[1])
}

const { cities: stateEntries, stateSlugs } = readStatesTs()
const stateSlugSet = new Set([...stateSlugs, ...stateSlugMap.keys()])
const cityToStates = new Map()

for (const entry of stateEntries) {
  if (!entry || !entry.slug) continue
  const resolvedState = stateFromSlug(entry.slug, stateSlugSet)
  const resolvedCity = entry.name || cityFromSlug(entry.slug, resolvedState)
  if (!resolvedState || !resolvedCity) continue
  const key = resolvedCity.toLowerCase()
  if (!cityToStates.has(key)) {
    cityToStates.set(key, new Set())
  }
  cityToStates.get(key).add(resolvedState)
}

const uniqueStateForCity = (cityName) => {
  if (!cityName) return null
  const stateSet = cityToStates.get(cityName.toLowerCase())
  if (!stateSet || stateSet.size !== 1) return null
  return Array.from(stateSet)[0]
}

const candidates = []
for (const file of sourceFiles) {
  const filePath = path.join(root, file)
  const entries = readJson(filePath)
  for (const entry of entries) {
    if (!entry || !entry.slug) continue
    const directState = entry.state || stateFromSlug(entry.slug, stateSlugSet)
    const directCity = entry.name || cityFromSlug(entry.slug, directState)
    const resolvedState = directState || uniqueStateForCity(directCity)
    const resolvedCity = directCity || cityFromSlug(entry.slug, resolvedState) || toTitleCase(entry.slug.replace(/-/g, ' '))
    if (!resolvedState || !resolvedCity) continue
    candidates.push({
      slug: entry.slug,
      city: resolvedCity,
      state: resolvedState
    })
  }
}

for (const entry of stateEntries) {
  if (!entry || !entry.slug) continue
  const resolvedState = stateFromSlug(entry.slug, stateSlugSet)
  const resolvedCity = entry.name || cityFromSlug(entry.slug, resolvedState)
  if (!resolvedState || !resolvedCity) continue
  candidates.push({
    slug: entry.slug,
    city: resolvedCity,
    state: resolvedState
  })
}

const serviceEntries = readCitiesFromTs(path.join(root, 'src/data/vending-services-cities.ts'))
for (const entry of serviceEntries) {
  if (!entry || !entry.slug || !entry.city || !entry.state) continue
  candidates.push(entry)
}

const serviceDirs = readCityDirs(path.join(root, 'src/app/_city-pages/vending-services'))
for (const slug of serviceDirs) {
  const resolvedState = stateFromSlug(slug, stateSlugSet)
  const resolvedCity = cityFromSlug(slug, resolvedState)
  if (!resolvedState || !resolvedCity) continue
  candidates.push({
    slug,
    city: resolvedCity,
    state: resolvedState
  })
}

const leadDirs = readCityDirs(path.join(root, 'src/app/_city-pages/vending-leads'))
for (const slug of leadDirs) {
  const resolvedState = stateFromSlug(slug, stateSlugSet)
  const resolvedCity = cityFromSlug(slug, resolvedState)
  if (!resolvedState || !resolvedCity) continue
  candidates.push({
    slug,
    city: resolvedCity,
    state: resolvedState
  })
}

const taxDirs = readCityDirs(path.join(root, 'src/app/_city-pages/tax-services'))
for (const slug of taxDirs) {
  const resolvedState = stateFromSlug(slug, stateSlugSet)
  const resolvedCity = cityFromSlug(slug, resolvedState)
  if (!resolvedState || !resolvedCity) continue
  candidates.push({
    slug,
    city: resolvedCity,
    state: resolvedState
  })
}

const machineDirs = readCityDirs(path.join(root, 'src/app/_city-pages/vending-machines-for-sale-in'))
for (const dirName of machineDirs) {
  const slug = dirName.replace(/^vending-machines-for-sale-in-/, '')
  if (!slug || slug === dirName) continue
  const resolvedState = stateFromSlug(slug, stateSlugSet)
  const resolvedCity = cityFromSlug(slug, resolvedState)
  if (!resolvedState || !resolvedCity) continue
  candidates.push({
    slug,
    city: resolvedCity,
    state: resolvedState
  })
}

const uniqueNew = new Map()
for (const entry of candidates) {
  if (existingSlugs.has(entry.slug)) continue
  if (uniqueNew.has(entry.slug)) continue
  uniqueNew.set(entry.slug, entry)
}

const targetCount = Number(process.env.COUNT || '1000')
const newEntries = Array.from(uniqueNew.values())

const buildVariants = (entry) => {
  const slug = entry.slug
  if (!slug || !slug.includes('-')) return []
  if (slug.includes('-metro-') || slug.includes('-greater-') || slug.includes('-county-')) return []
  const stateSlugList = Array.from(stateSlugSet).sort((a, b) => b.length - a.length)
  let matchedStateSlug = null
  for (const stateSlug of stateSlugList) {
    if (slug.endsWith(`-${stateSlug}`)) {
      matchedStateSlug = stateSlug
      break
    }
  }
  if (!matchedStateSlug) return []
  const citySlug = slug.slice(0, -(matchedStateSlug.length + 1))
  if (!citySlug) return []
  const cityParts = citySlug.split('-')
  const hasDirectionalToken = ['north', 'south', 'east', 'west', 'central', 'downtown', 'uptown'].some((token) =>
    cityParts.includes(token)
  )
  const variants = [
    {
      slug: `${citySlug}-metro-${matchedStateSlug}`,
      city: `${entry.city} Metro`,
      state: entry.state
    },
    {
      slug: `${citySlug}-greater-${matchedStateSlug}`,
      city: `Greater ${entry.city}`,
      state: entry.state
    }
  ]
  if (!hasDirectionalToken) {
    const directionalVariants = [
      { slug: `${citySlug}-north-${matchedStateSlug}`, city: `North ${entry.city}` },
      { slug: `${citySlug}-south-${matchedStateSlug}`, city: `South ${entry.city}` },
      { slug: `${citySlug}-east-${matchedStateSlug}`, city: `East ${entry.city}` },
      { slug: `${citySlug}-west-${matchedStateSlug}`, city: `West ${entry.city}` },
      { slug: `${citySlug}-central-${matchedStateSlug}`, city: `Central ${entry.city}` },
      { slug: `${citySlug}-downtown-${matchedStateSlug}`, city: `Downtown ${entry.city}` },
      { slug: `${citySlug}-uptown-${matchedStateSlug}`, city: `Uptown ${entry.city}` }
    ]
    for (const variant of directionalVariants) {
      variants.push({
        slug: variant.slug,
        city: variant.city,
        state: entry.state
      })
    }
  }
  if (!citySlug.endsWith('county') && !citySlug.includes('-county')) {
    variants.push({
      slug: `${citySlug}-county-${matchedStateSlug}`,
      city: `${entry.city} County`,
      state: entry.state
    })
  }
  return variants
}

if (newEntries.length < targetCount) {
  const needed = targetCount - newEntries.length
  const leadEntries = readCitiesFromTs(dataFile)
  const generated = []

  for (const entry of leadEntries) {
    if (generated.length >= needed) break
    const variants = buildVariants(entry)
    for (const variant of variants) {
      if (generated.length >= needed) break
      if (existingSlugs.has(variant.slug) || uniqueNew.has(variant.slug)) continue
      generated.push(variant)
      uniqueNew.set(variant.slug, variant)
    }
  }

  if (generated.length < needed) {
    throw new Error(`Only found ${newEntries.length + generated.length} new city entries. Need ${targetCount}.`)
  }
  newEntries.push(...generated)
}

newEntries.splice(targetCount)

if (newEntries.length < targetCount) {
  throw new Error(`Only found ${newEntries.length} new city entries. Need ${targetCount}.`)
}

newEntries.sort((a, b) => a.slug.localeCompare(b.slug))

const lines = newEntries.map((entry) => {
  const slug = escapeValue(entry.slug)
  const city = escapeValue(entry.city)
  const state = escapeValue(entry.state)
  return [
    `  "${slug}": {`,
    `    "city": "${city}",`,
    `    "state": "${state}",`,
    `    "slug": "${slug}"`,
    '  }'
  ].join('\n')
})

const marker = '\n} as const;'
const index = content.lastIndexOf(marker)
if (index === -1) {
  throw new Error('Failed to find end of vendingLeadsCities object.')
}

const insertion = `,\n${lines.join(',\n')}\n`
const updated = content.slice(0, index) + insertion + content.slice(index)

fs.writeFileSync(dataFile, updated, 'utf8')
console.log(`Added ${newEntries.length} new vending-leads cities.`)
