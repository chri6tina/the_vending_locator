'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function UsersDashboardPage() {
  const [selectedRole, setSelectedRole] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const roles = [
    { value: 'all', label: 'All Roles' },
    { value: 'admin', label: 'Administrator' },
    { value: 'manager', label: 'Manager' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' }
  ]

  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' }
  ]

  const users = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@thevendinglocator.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2 hours ago',
      permissions: 'Full Access'
    },
    {
      id: 2,
      name: 'Content Manager',
      email: 'content@thevendinglocator.com',
      role: 'manager',
      status: 'active',
      lastLogin: '1 day ago',
      permissions: 'Content Management'
    },
    {
      id: 3,
      name: 'Editor User',
      email: 'editor@thevendinglocator.com',
      role: 'editor',
      status: 'active',
      lastLogin: '3 days ago',
      permissions: 'Content Editing'
    },
    {
      id: 4,
      name: 'Viewer User',
      email: 'viewer@thevendinglocator.com',
      role: 'viewer',
      status: 'inactive',
      lastLogin: '1 week ago',
      permissions: 'Read Only'
    }
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800'
      case 'manager': return 'bg-blue-100 text-blue-800'
      case 'editor': return 'bg-green-100 text-green-800'
      case 'viewer': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'suspended': return 'bg-red-100 text-red-800'
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
                Users Dashboard
              </h1>
              <p className="text-stone text-lg">
                Manage user accounts, roles, and permissions
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
              <label className="block text-sm font-medium text-charcoal mb-2">Role</label>
              <select 
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>
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
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" aria-label="Add New User">
              Add New User
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-bronze">4</p>
            <p className="text-sm text-green-600">+1 this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-bronze">3</p>
            <p className="text-sm text-green-600">75% of total</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Admin Users</h3>
            <p className="text-3xl font-bold text-bronze">1</p>
            <p className="text-sm text-stone">Full access</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Last Activity</h3>
            <p className="text-3xl font-bold text-bronze">2h</p>
            <p className="text-sm text-stone">ago</p>
          </div>
        </div>

        {/* User Roles Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* User Roles */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">User Roles Distribution</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Administrator</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">1 user</span>
                  <span className="text-red-600 font-semibold">25%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Manager</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">1 user</span>
                  <span className="text-blue-600 font-semibold">25%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Editor</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">1 user</span>
                  <span className="text-green-600 font-semibold">25%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Viewer</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">1 user</span>
                  <span className="text-gray-600 font-semibold">25%</span>
                </div>
              </div>
            </div>
          </div>

          {/* User Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">User Status Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone">Active</span>
                <span className="text-green-600 font-semibold">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Inactive</span>
                <span className="text-gray-600 font-semibold">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Suspended</span>
                <span className="text-red-600 font-semibold">0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Users Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-charcoal">User</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Role</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Last Login</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Permissions</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-charcoal">{user.name}</div>
                        <div className="text-sm text-stone">{user.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-stone">{user.lastLogin}</td>
                    <td className="py-3 px-4 text-charcoal">{user.permissions}</td>
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
