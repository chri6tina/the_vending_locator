'use client'

import AdminLayout from '@/components/AdminLayout'
import AdminSidebar from '@/components/AdminSidebar'

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-playfair font-bold text-charcoal mb-8">
              Admin Dashboard
            </h1>
            
            {/* Dashboard Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Total Cities</h3>
                <p className="text-3xl font-bold text-bronze">21+</p>
                <p className="text-sm text-stone">Vending leads pages</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Total Businesses</h3>
                <p className="text-3xl font-bold text-bronze">500K+</p>
                <p className="text-sm text-stone">Across all cities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Coverage</h3>
                <p className="text-3xl font-bold text-bronze">25+</p>
                <p className="text-sm text-stone">States covered</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Industries</h3>
                <p className="text-3xl font-bold text-bronze">15+</p>
                <p className="text-sm text-stone">Business sectors</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-charcoal mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-stone">Added new city page: Savannah, Georgia</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-stone">Added new city page: St. Petersburg, Florida</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-stone">Added new city page: Springfield, Massachusetts</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-stone">Updated pricing table component</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
