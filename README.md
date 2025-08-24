# The Vending Locator - Website

A modern, responsive website for The Vending Locator, built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with full responsive design
- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Animations**: Smooth animations using Framer Motion
- **Form Integration**: Formspree integration for contact forms
- **Stripe Integration**: Direct links to Stripe checkout for all packages
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: ARIA labels and focus handling

## 🎨 Design System

### Color Palette
- **Primary Background**: Warm cream (#fdf4e3)
- **Primary Text**: Dark chocolate brown (#4a3a32)
- **Accent Color**: Coral/salmon (#f76f64)
- **Secondary Accent**: Muted terracotta (#d97a5f)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Nunito & Inter (sans-serif)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   ├── hot-leads/         # Location packages page
│   ├── blog/              # Blog page
│   └── contact/           # Contact page
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section with animated counters
│   ├── PricingTable.tsx   # Subscription pricing table
│   ├── HotLeads.tsx       # Location packages
│   └── Testimonials.tsx   # Customer testimonials
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the_vending_locator_new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Home (`/`)
- Hero section with animated statistics
- Pricing table overview
- Hot leads packages
- Customer testimonials

### Services (`/services`)
- Industry breakdowns
- Service descriptions
- Call-to-action sections

### Pricing (`/pricing`)
- Detailed subscription comparison
- FAQ section
- Interactive pricing table

### Hot Leads (`/hot-leads`)
- One-time location packages
- Process explanation
- Stripe checkout integration

### Blog (`/blog`)
- Blog post previews
- Category filtering
- Newsletter signup

### Contact (`/contact`)
- Contact form with Formspree
- Company information
- Business hours

## 💳 Stripe Integration

All pricing packages include direct Stripe checkout links:

### Pricing Packages
- **Basic ($19)**: [Stripe Link](https://buy.stripe.com/aEU2929ZcfvQ10IdQT)
- **Pro ($29)**: [Stripe Link](https://buy.stripe.com/4gwaFyfjw1F0gZG004)
- **Start ($129)**: [Stripe Link](https://buy.stripe.com/3cs8xq2wKdnI6l24gl)
- **Gold ($899)**: [Stripe Link](https://buy.stripe.com/dR614Y4ESgzU6l25kq)

### Location Packages
- **Quick Find ($500)**: [Stripe Link](https://buy.stripe.com/5kQ7sL3JXfie0LDg7J6Na07)
- **Smart Spot ($1,000)**: [Stripe Link](https://buy.stripe.com/dRmbJ194h0nk9i96x96Na08)
- **Prime Location ($1,500)**: [Stripe Link](https://buy.stripe.com/00wcN51BP4DA51T3kX6Na09)
- **Elite Placement ($2,000)**: [Stripe Link](https://buy.stripe.com/28E4gzeoB2vs3XPcVx6Na0a)

## 📧 Formspree Integration

Contact forms are integrated with Formspree:
- **Primary Contact**: https://formspree.io/f/xdkgqele
- **Sales Inquiries**: https://formspree.io/f/xdkgqele
- **Support Requests**: https://formspree.io/f/xdkgqele

## 🎯 Business Information

- **Company**: The Vending Locator
- **Location**: Jacksonville, Florida
- **Target Audience**: Vending machine operators
- **Value Proposition**: Qualified vending location leads with verified contact information

## 🔧 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  cream: '#fdf4e3',
  chocolate: '#4a3a32',
  coral: '#f76f64',
  terracotta: '#d97a5f',
  butter: '#fff2cc',
}
```

### Content
- Update business information in components
- Modify pricing in `PricingTable.tsx` and `HotLeads.tsx`
- Edit testimonials in `Testimonials.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Optimized images and lazy loading
- Efficient component rendering
- Minimal bundle size
- Fast loading times

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph support
- Structured data ready
- Semantic HTML structure

## 📄 License

This project is proprietary to The Vending Locator.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**Built with ❤️ for The Vending Locator**
