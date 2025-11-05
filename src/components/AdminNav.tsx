'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, FireIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function AdminNav() {
  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: HomeIcon,
      active: pathname === '/admin'
    },
    {
      name: 'Hot Leads',
      href: '/admin/hot-leads',
      icon: FireIcon,
      active: pathname === '/admin/hot-leads'
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: ChartBarIcon,
      active: pathname === '/admin/analytics',
      disabled: true
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Cog6ToothIcon,
      active: pathname === '/admin/settings',
      disabled: true
    }
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-8">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="text-2xl font-playfair font-bold text-navy">
                The Vending Locator
              </div>
              <span className="px-2 py-1 bg-navy/10 text-navy text-xs font-semibold rounded">
                ADMIN
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                if (item.disabled) {
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 px-4 py-2 text-gray-400 cursor-not-allowed"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs">(Soon)</span>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-navy text-white'
                        : 'text-stone hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2 text-sm text-stone hover:text-charcoal transition-colors"
            >
              View Site →
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden pb-3 flex gap-2 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            if (item.disabled) return null
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap text-sm transition-colors ${
                  item.active
                    ? 'bg-navy text-white'
                    : 'text-stone hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

