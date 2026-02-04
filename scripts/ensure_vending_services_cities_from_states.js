const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const dataFile = path.join(root, 'src/data/vending-services-cities.ts')
const statesFile = path.join(root, 'src/data/states.ts')

const readStates = () => {
  if (!fs.existsSync(statesFile)) return []
  const raw = fs.readFileSync(statesFile, 'utf8')
  const stateRegex = /name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*cities:\s*\[([\s\S]*?)\]/g
  const cityRegex = /\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)'\s*\}/g
  const cities = []
  let match
  while ((match = stateRegex.exec(raw))) {
    const stateName = match[1]
    const citiesBlock = match[3]
    let cityMatch
    while ((cityMatch = cityRegex.exec(citiesBlock))) {
      cities.push({
        city: cityMatch[1],
        slug: cityMatch[2],
        state: stateName
      })
    }
  }
  return cities
}

const escapeValue = (value) => String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')

const content = fs.readFileSync(dataFile, 'utf8')
const existingSlugs = new Set()
const slugRegex = /"([^"]+)":\s*\{/g
let match
while ((match = slugRegex.exec(content))) {
  existingSlugs.add(match[1])
}

const candidates = readStates()
const missing = candidates.filter((entry) => !existingSlugs.has(entry.slug))

if (!missing.length) {
  console.log('No missing vending-services cities found.')
  process.exit(0)
}

missing.sort((a, b) => a.slug.localeCompare(b.slug))

const lines = missing.map((entry) => {
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
console.log(`Added ${missing.length} missing vending-services cities from states.ts.`)
