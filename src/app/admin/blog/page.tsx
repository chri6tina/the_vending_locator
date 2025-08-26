'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BlogDashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'vending-business', label: 'Vending Business' },
    { value: 'industry-news', label: 'Industry News' },
    { value: 'tips-guides', label: 'Tips & Guides' },
    { value: 'case-studies', label: 'Case Studies' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'How to Start a Vending Machine Business in 2024',
      category: 'vending-business',
      status: 'published',
      author: 'Admin Team',
      publishedDate: '2024-01-15',
      views: 12450,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Top 10 Vending Machine Locations for Maximum Profit',
      category: 'tips-guides',
      status: 'published',
      author: 'Admin Team',
      publishedDate: '2024-01-10',
      views: 9870,
      comments: 18,
      featured: false
    },
    {
      id: 3,
      title: 'Industry Trends: Healthy Vending on the Rise',
      category: 'industry-news',
      status: 'published',
      author: 'Admin Team',
      publishedDate: '2024-01-05',
      views: 7650,
      comments: 12,
      featured: true
    },
    {
      id: 4,
      title: 'Case Study: Successful Vending Route in Austin',
      category: 'case-studies',
      status: 'draft',
      author: 'Admin Team',
      publishedDate: null,
      views: 0,
      comments: 0,
      featured: false
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      case 'archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
                Blog Posts Dashboard
              </h1>
              <p className="text-stone text-lg">
                Manage blog content, track performance, and engage with your audience
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

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Status</label>
              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" aria-label="Create New Post">
              Create New Post
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Posts</h3>
            <p className="text-3xl font-bold text-bronze">11</p>
            <p className="text-sm text-green-600">+2 this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Views</h3>
            <p className="text-3xl font-bold text-bronze">29.9K</p>
            <p className="text-sm text-green-600">+22.1% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Avg Engagement</h3>
            <p className="text-3xl font-bold text-bronze">4.2%</p>
            <p className="text-sm text-green-600">+0.8% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Comments</h3>
            <p className="text-3xl font-bold text-bronze">53</p>
            <p className="text-sm text-green-600">+15 this month</p>
          </div>
        </div>

        {/* Blog Posts Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Blog Posts Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Author</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Published</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Views</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogPosts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-charcoal">{post.title}</div>
                        {post.featured && (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-charcoal capitalize">{post.category.replace('-', ' ')}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(post.status)}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-charcoal">{post.author}</td>
                    <td className="py-3 px-4 text-sm text-stone">
                      {post.publishedDate ? new Date(post.publishedDate).toLocaleDateString() : 'Draft'}
                    </td>
                    <td className="py-3 px-4 text-charcoal">{post.views.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-navy hover:text-navy/80 text-sm font-medium" aria-label="Edit">
                          Edit
                        </button>
                        <button className="text-navy hover:text-navy/80 text-sm font-medium" aria-label="View">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
