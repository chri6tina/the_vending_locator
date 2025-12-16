// Remove duplicate city entries to get exactly 1000
const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');
const lines = content.split('\n');

const seen = new Set();
const toRemove = [];
let inCityEntry = false;
let entryStartLine = -1;
let currentSlug = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^  '([^']+)': \{$/);
  
  if (match) {
    const slug = match[1];
    if (seen.has(slug)) {
      // This is a duplicate - mark for removal
      entryStartLine = i;
      currentSlug = slug;
      inCityEntry = true;
      toRemove.push({ start: i, slug });
    } else {
      seen.add(slug);
      if (inCityEntry) {
        // Previous entry ended
        inCityEntry = false;
      }
      entryStartLine = i;
      currentSlug = slug;
      inCityEntry = true;
    }
  } else if (inCityEntry && line.trim() === '},') {
    // End of entry
    if (toRemove.length > 0 && toRemove[toRemove.length - 1].start === entryStartLine) {
      toRemove[toRemove.length - 1].end = i;
    }
    inCityEntry = false;
  } else if (inCityEntry && line.trim() === '}') {
    // End of last entry (no comma)
    if (toRemove.length > 0 && toRemove[toRemove.length - 1].start === entryStartLine) {
      toRemove[toRemove.length - 1].end = i;
    }
    inCityEntry = false;
  }
}

console.log(`Found ${toRemove.length} duplicate entries to remove:`);
toRemove.forEach(d => console.log(`  Lines ${d.start + 1}-${d.end + 1}: ${d.slug}`));

// Remove duplicates (in reverse order to maintain line numbers)
const linesToKeep = new Set();
for (let i = 0; i < lines.length; i++) {
  linesToKeep.add(i);
}

toRemove.forEach(dup => {
  for (let i = dup.start; i <= dup.end; i++) {
    linesToKeep.delete(i);
  }
  // Also remove the comma before if it exists
  if (dup.start > 0 && lines[dup.start - 1].trim() === ',') {
    linesToKeep.delete(dup.start - 1);
  }
});

const newLines = Array.from(linesToKeep).sort((a, b) => a - b).map(i => lines[i]);

fs.writeFileSync(pagePath, newLines.join('\n'), 'utf8');

console.log(`\n✅ Removed ${toRemove.length} duplicate entries`);
console.log(`   Original lines: ${lines.length}`);
console.log(`   New lines: ${newLines.length}`);

// Verify count
const finalContent = fs.readFileSync(pagePath, 'utf8');
const finalMatches = Array.from(finalContent.matchAll(/^  '([^']+)': \{/gm));
console.log(`   Final unique entries: ${finalMatches.length}`);

