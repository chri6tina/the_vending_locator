@echo off
REM Create New City Page Script for Windows
REM Usage: scripts\create_new_city.bat <city-slug>
REM Example: scripts\create_new_city.bat orlando-florida

if "%1"=="" (
    echo ❌ Error: Please provide a city slug
    echo Usage: scripts\create_new_city.bat ^<city-slug^>
    echo Example: scripts\create_new_city.bat orlando-florida
    exit /b 1
)

set CITY_SLUG=%1
echo 🏗️  Creating new city page for: %CITY_SLUG%
echo.

REM Run the create script
node scripts/create_specific_city_pages.js %CITY_SLUG%

echo.
echo ✅ Done! City page created at: src/app/vending-leads/%CITY_SLUG%/page.tsx
echo.
echo 📋 Next steps:
echo    1. Test the page locally
echo    2. Update city-specific data if needed
echo    3. Deploy to production
echo.

