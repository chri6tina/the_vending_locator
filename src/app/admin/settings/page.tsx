'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SettingsDashboardPage() {
  const [selectedTab, setSelectedTab] = useState('general')
  const [businessName, setBusinessName] = useState('The Vending Locator')
  const [contactEmail, setContactEmail] = useState('contact@thevendinglocator.com')
  const [phoneNumber, setPhoneNumber] = useState('(555) 123-4567')
  const [websiteUrl, setWebsiteUrl] = useState('https://www.thevendinglocator.com')

  const tabs = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'business', label: 'Business', icon: '🏢' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' }
  ]

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
                Settings Dashboard
              </h1>
              <p className="text-stone text-lg">
                Configure your vending locator business settings and preferences
              </p>
            </div>
            <Link 
              href="/admin"
              className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Settings Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-navy text-white'
                    : 'bg-warm-white text-charcoal hover:bg-stone'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* General Settings */}
        {selectedTab === 'general' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-charcoal mb-6">General Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Contact Email</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Website URL</label>
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Business Settings */}
        {selectedTab === 'business' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-charcoal mb-6">Business Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Business Type</label>
                <select className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent">
                  <option>Vending Machine Business</option>
                  <option>Vending Machine Supplier</option>
                  <option>Vending Machine Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Service Areas</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Texas', 'California', 'Florida', 'New York', 'Illinois', 'Arizona', 'Nevada', 'Oregon'].map((state) => (
                    <label key={state} className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked={['Texas', 'California', 'Florida'].includes(state)} />
                      <span className="text-sm text-charcoal">{state}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Business Hours</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone mb-1">Monday - Friday</label>
                    <input
                      type="text"
                      defaultValue="9:00 AM - 6:00 PM"
                      className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone mb-1">Saturday</label>
                    <input
                      type="text"
                      defaultValue="10:00 AM - 4:00 PM"
                      className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Save Business Settings
              </button>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {selectedTab === 'notifications' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-charcoal mb-6">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-warm-white rounded-lg">
                <div>
                  <h3 className="font-medium text-charcoal">New Lead Notifications</h3>
                  <p className="text-sm text-stone">Get notified when new leads are submitted</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-warm-white rounded-lg">
                <div>
                  <h3 className="font-medium text-charcoal">Weekly Reports</h3>
                  <p className="text-sm text-stone">Receive weekly performance reports</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-warm-white rounded-lg">
                <div>
                  <h3 className="font-medium text-charcoal">System Updates</h3>
                  <p className="text-sm text-stone">Notifications about system maintenance and updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Save Notification Settings
              </button>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {selectedTab === 'security' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-charcoal mb-6">Security Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="2fa" className="mr-2" />
                <label htmlFor="2fa" className="text-sm text-charcoal">Enable Two-Factor Authentication</label>
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Update Security Settings
              </button>
            </div>
          </div>
        )}

        {/* Integration Settings */}
        {selectedTab === 'integrations' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-charcoal mb-6">Integration Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-warm-white rounded-lg">
                <div>
                  <h3 className="font-medium text-charcoal">Google Analytics</h3>
                  <p className="text-sm text-stone">Track website performance and user behavior</p>
                </div>
                <button className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors">
                  Connect
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-warm-white rounded-lg">
                <div>
                  <h3 className="font-medium text-charcoal">Stripe Payments</h3>
                  <p className="text-sm text-stone">Process payments and manage subscriptions</p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Connected
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-warm-white rounded-lg">
                <div>
                  <h3 className="font-medium text-charcoal">Mailchimp</h3>
                  <p className="text-sm text-stone">Email marketing and automation</p>
                </div>
                <button className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Save All Button */}
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors font-medium">
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  )
}
