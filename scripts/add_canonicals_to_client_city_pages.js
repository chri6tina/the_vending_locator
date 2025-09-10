// Create head.tsx with a self-canonical tag for client city pages missing metadata
const fs = require('fs')
const path = require('path')

const root = process.cwd()
const baseDir = path.join(root, 'src', 'app', 'vending-leads')

function getCityDirs(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => path.join(dir, d.name))
}

function hasMetadataExport(src) {
  return /export\s+const\s+metadata|export\s+async\s+function\s+generateMetadata/i.test(src)
}

function isClientPage(src) {
  return /^'use client'|^"use client"/m.test(src)
}

function ensureHeadFile(cityDir) {
  const slug = path.basename(cityDir)
  const headPath = path.join(cityDir, 'head.tsx')
  if (fs.existsSync(headPath)) return false
  const href = `https://www.thevendinglocator.com/vending-leads/${slug}`
  const content = `export default function Head() {
  return (
    <>
      <link rel="canonical" href="${href}" />
    </>
  )
}
`
  fs.writeFileSync(headPath, content, 'utf8')
  return true
}

function run() {
  const dirs = getCityDirs(baseDir)
  let created = 0
  for (const dir of dirs) {
    const pagePath = path.join(dir, 'page.tsx')
    if (!fs.existsSync(pagePath)) continue
    const src = fs.readFileSync(pagePath, 'utf8')
    if (!isClientPage(src)) continue
    if (hasMetadataExport(src)) continue
    if (ensureHeadFile(dir)) created++
  }
  console.log(`Created ${created} head.tsx files with canonicals.`)
}

run()


