'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Website Rental', href: '/vending-website-rental', highlight: true },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Guide', href: '/guide' },
  { name: 'Hot Leads', href: '/hot-leads' },
  { name: 'About', href: '/about-us' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [taxServicesOpen, setTaxServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The Vending Locator</span>
            <h1 className="text-2xl font-playfair font-bold text-chocolate">
              The Vending Locator
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors ${
                item.highlight 
                  ? 'text-coral hover:text-coral/80 border-b-2 border-coral pb-1' 
                  : 'text-chocolate hover:text-coral'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {/* Tax Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-chocolate hover:text-coral transition-colors flex items-center gap-1"
              onMouseEnter={() => setTaxServicesOpen(true)}
              onMouseLeave={() => setTaxServicesOpen(false)}
            >
              Tax Services
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            {taxServicesOpen && (
              <div
                className="absolute left-0 top-full z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setTaxServicesOpen(true)}
                onMouseLeave={() => setTaxServicesOpen(false)}
              >
                <div className="py-1">
                  <Link
                    href="/ein-llc"
                    className="block px-4 py-2 text-sm text-chocolate hover:bg-gray-50 hover:text-coral transition-colors"
                  >
                    EIN & LLC
                  </Link>
                  <Link
                    href="/tax-services"
                    className="block px-4 py-2 text-sm text-chocolate hover:bg-gray-50 hover:text-coral transition-colors"
                  >
                    Tax Services
                  </Link>
                  <Link
                    href="/tax-services"
                    className="block px-4 py-2 text-sm text-chocolate hover:bg-gray-50 hover:text-coral transition-colors"
                  >
                    Sales Tax
                  </Link>
                  <Link
                    href="/tax-services"
                    className="block px-4 py-2 text-sm text-chocolate hover:bg-gray-50 hover:text-coral transition-colors"
                  >
                    Use Tax
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">The Vending Locator</span>
                <h1 className="text-xl font-playfair font-bold text-chocolate">
                  The Vending Locator
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                        item.highlight 
                          ? 'bg-coral text-white hover:bg-coral/90' 
                          : 'text-chocolate hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* Tax Services in Mobile Menu */}
                  <div className="-mx-3">
                    <div className="px-3 py-2 text-base font-semibold leading-7 text-chocolate">
                      Tax Services
                    </div>
                    <div className="pl-6 space-y-1">
                      <Link
                        href="/ein-llc"
                        className="block rounded-lg px-3 py-2 text-sm leading-7 text-chocolate/80 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        EIN & LLC
                      </Link>
                      <Link
                        href="/tax-services"
                        className="block rounded-lg px-3 py-2 text-sm leading-7 text-chocolate/80 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tax Services
                      </Link>
                      <Link
                        href="/tax-services"
                        className="block rounded-lg px-3 py-2 text-sm leading-7 text-chocolate/80 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sales Tax
                      </Link>
                      <Link
                        href="/tax-services"
                        className="block rounded-lg px-3 py-2 text-sm leading-7 text-chocolate/80 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Use Tax
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
