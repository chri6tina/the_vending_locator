'use client'

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            Admin Dashboard
          </h1>
          <p className="text-stone text-lg">
            Welcome to your vending locator business dashboard
          </p>
        </div>
        
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
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

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-stone rounded-lg hover:border-bronze hover:bg-warm-white transition-colors text-left">
              <h3 className="font-semibold text-charcoal mb-2">View All Cities</h3>
              <p className="text-sm text-stone">Browse all vending leads pages</p>
            </button>
            <button className="p-4 border border-stone rounded-lg hover:border-bronze hover:bg-warm-white transition-colors text-left">
              <h3 className="font-semibold text-charcoal mb-2">Analytics</h3>
              <p className="text-sm text-stone">View business metrics and insights</p>
            </button>
            <button className="p-4 border border-stone rounded-lg hover:border-bronze hover:bg-warm-white transition-colors text-left">
              <h3 className="font-semibold text-charcoal mb-2">Settings</h3>
              <p className="text-sm text-stone">Configure your business settings</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
