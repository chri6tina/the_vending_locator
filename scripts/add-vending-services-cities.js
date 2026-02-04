const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const dataFile = path.join(root, 'src/data/vending-services-cities.ts')
const statesFile = path.join(root, 'src/data/states.ts')

const readStates = () => {
  if (!fs.existsSync(statesFile)) return []
  const raw = fs.readFileSync(statesFile, 'utf8')
  const stateRegex = /name:\s*'([^']+)',\s*slug:\s*'([^']+)'/g
  const states = []
  let match
  while ((match = stateRegex.exec(raw))) {
    states.push({ name: match[1], slug: match[2] })
  }
  return states
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
  ['washington-dc', 'Washington DC'],
  ['district-of-columbia', 'Washington DC'],
  ['dc', 'Washington DC'],
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

const content = fs.readFileSync(dataFile, 'utf8')
const existingSlugs = new Set()
const slugRegex = /"([^"]+)":\s*\{/g
let match
while ((match = slugRegex.exec(content))) {
  existingSlugs.add(match[1])
}

const states = readStates()
const stateSlugSet = new Set([
  ...states.map((entry) => entry.slug),
  ...stateSlugMap.keys()
])

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

const targetCount = Number(process.env.COUNT || '1000')
const baseEntries = readCitiesFromTs(dataFile)

const generated = []
for (const entry of baseEntries) {
  if (generated.length >= targetCount) break
  const variants = buildVariants(entry)
  for (const variant of variants) {
    if (generated.length >= targetCount) break
    if (existingSlugs.has(variant.slug)) continue
    existingSlugs.add(variant.slug)
    generated.push(variant)
  }
}

if (generated.length < targetCount) {
  throw new Error(`Only found ${generated.length} new city entries. Need ${targetCount}.`)
}

generated.splice(targetCount)
generated.sort((a, b) => a.slug.localeCompare(b.slug))

const lines = generated.map((entry) => {
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
  throw new Error('Failed to find end of vendingServicesCities object.')
}

const insertion = `,\n${lines.join(',\n')}\n`
const updated = content.slice(0, index) + insertion + content.slice(index)

fs.writeFileSync(dataFile, updated, 'utf8')
console.log(`Added ${generated.length} new vending-services cities.`)
