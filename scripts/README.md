# 🛠️ Automation Scripts Directory

This directory contains all the automation scripts for managing the vending locator website.

## 📁 Scripts Overview

### **Page Management Scripts**
- `check_title_description_consistency.js` - Scans all city pages for title-description mismatches
- `scan_city_pages_inventory.js` - Scans city pages for template compliance and missing components
- `set_realistic_counters.js` - Sets realistic active users counters based on city size

### **Legacy Scripts (Root Directory)**
- `fix_active_users_counters.js` - Old script for fixing counter issues (superseded)
- `ers_counters.js` - Counter-related script

## 🚀 How to Use

1. **Navigate to scripts directory:**
   ```bash
   cd scripts
   ```

2. **Run any script:**
   ```bash
   node check_title_description_consistency.js
   node scan_city_pages_inventory.js
   node set_realistic_counters.js
   ```

## 📊 Reports Generated

- `TITLE_DESCRIPTION_CONSISTENCY_REPORT.md` - Title-description consistency issues
- `CITY_PAGES_SCAN_REPORT.md` - Template compliance and missing components
- `CITY_PAGES_INVENTORY.md` - Complete inventory and roadmap

## 🔧 Script Maintenance

- All scripts are designed to be run from the project root
- Scripts generate detailed reports in markdown format
- Use `--help` flag for usage information (where available)
