import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Products', href: '/vending-machine-products' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/vending-locations' },
    { name: 'Vending Leads', href: '/vending-leads' },
    { name: 'Vending Services', href: '/vending-services' },
    { name: 'Tax Services', href: '/tax-services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Find Vendors', href: '/vending-companies/austin-texas' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Hot Leads', href: '/hot-leads' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-white hover:text-navy-light transition-colors">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 sm:mt-10 flex justify-center space-x-8 sm:space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-white hover:text-navy-light transition-colors">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-10 border-t border-white/20 pt-8 sm:pt-10">
          <div className="text-center px-4 sm:px-0">
            <p className="text-sm leading-5 text-white">
              &copy; 2024 The Vending Locator. All rights reserved.
            </p>
            <div className="mt-3 sm:mt-4 text-sm text-white/90">
              <p className="mt-1">Trusted by 3,000+ vending operators nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
