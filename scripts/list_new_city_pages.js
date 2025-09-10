const { execSync } = require('child_process')
const fs = require('fs')

function listFromCommit(commit) {
  const out = execSync(`git show --name-only --pretty= ${commit}`, { encoding: 'utf8' })
  return out
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
}

function main() {
  // Default to last commit if not provided
  const commit = process.argv[2] || execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
  const files = listFromCommit(commit)
  const slugs = files
    .filter(p => p.startsWith('src/app/vending-leads/') && p.endsWith('/page.tsx'))
    .map(p => p.replace(/\\/g, '/'))
    .map(p => p.split('/')[3])
    .filter(Boolean)
    .sort()

  const md = [
    '# New City Pages',
    '',
    `Commit: ${commit}`,
    `Total: ${slugs.length}`,
    '',
    ...slugs.map(s => `- ${s}\n  - Local: http://localhost:3000/vending-leads/${s}\n  - Prod:  https://www.thevendinglocator.com/vending-leads/${s}`)
  ].join('\n')

  fs.writeFileSync('NEW_CITY_PAGES.md', md, 'utf8')
  console.log(`Wrote NEW_CITY_PAGES.md with ${slugs.length} entries from ${commit}`)
}

if (require.main === module) main()


