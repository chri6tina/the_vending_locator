# Current Color Scheme Backup

## Brand Colors (from tailwind.config.ts)
- **cream**: #FDF8F3
- **chocolate**: #2D1810  
- **coral**: #FF6B6B
- **terracotta**: #E07A5F
- **butter**: #F4E4BC

## Current Usage Throughout Website

### Background Colors
- **Main Background**: cream (#FDF8F3)
- **White Sections**: white
- **Modal Background**: white
- **Package Summary Background**: cream/30 (30% opacity)

### Text Colors
- **Primary Headings**: chocolate (#2D1810)
- **Secondary Text**: chocolate/70, chocolate/80 (70-80% opacity)
- **Muted Text**: chocolate/60 (60% opacity)
- **White Text**: white (on dark backgrounds)

### Accent Colors
- **Primary Buttons**: coral (#FF6B6B)
- **Secondary Buttons**: terracotta (#E07A5F)
- **Popular Plan Highlight**: coral border
- **Table Headers**: butter (#F4E4BC)
- **Section Dividers**: terracotta/10, terracotta/30
- **Table Dividers**: coral/20

### Interactive Elements
- **Focus Rings**: coral
- **Hover States**: coral/50, terracotta/50
- **Error States**: red-300, red-600

### Modal Header (Current)
- **Background**: stone-600 to neutral-700 gradient
- **Text**: white

## Notes
- The current scheme uses warm, earthy tones that may feel too soft for male-dominated industries
- Coral and terracotta are bright accent colors that could be replaced with more masculine alternatives
- Cream background is very light and could be darkened for more professional appearance
- Chocolate text provides good contrast but could be adjusted for better readability

## Revert Instructions
To revert to this exact color scheme, restore the colors in:
1. `tailwind.config.ts` - brand colors
2. `src/components/ZipCodeModal.tsx` - modal header colors
3. All component files using the current color classes
