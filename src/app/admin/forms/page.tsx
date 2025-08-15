'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Form {
  id: string
  page: string
  formType: string
  submittedAt: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  paymentStatus: 'unpaid' | 'paid' | 'refunded' | 'failed'
  paymentAmount: number
  stripePaymentId: string | null
  taskCompleted: boolean
  taskCompletedAt: string | null
  notes: string
  customerContact: {
    name: string
    email: string
    phone: string
    company: string
  }
}

export default function FormsDashboard() {
  const [forms, setForms] = useState<Form[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedForm, setSelectedForm] = useState<Form | null>(null)
  const [filters, setFilters] = useState({
    status: '',
    page: '',
    paymentStatus: ''
  })
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    paid: 0,
    unpaid: 0
  })

  // Fetch forms on component mount
  useEffect(() => {
    fetchForms()
  }, [filters])

  const fetchForms = async () => {
    try {
      setLoading(true)
      const queryParams = new URLSearchParams()
      
      if (filters.status) queryParams.append('status', filters.status)
      if (filters.page) queryParams.append('page', filters.page)
      if (filters.paymentStatus) queryParams.append('paymentStatus', filters.paymentStatus)
      
      const response = await fetch(`/api/forms?${queryParams}`)
      const data = await response.json()
      
      if (data.success) {
        setForms(data.forms)
        calculateStats(data.forms)
      }
    } catch (error) {
      console.error('Error fetching forms:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (formsData: Form[]) => {
    setStats({
      total: formsData.length,
      pending: formsData.filter(f => f.status === 'pending').length,
      completed: formsData.filter(f => f.status === 'completed').length,
      paid: formsData.filter(f => f.paymentStatus === 'paid').length,
      unpaid: formsData.filter(f => f.paymentStatus === 'unpaid').length
    })
  }

  const updateFormStatus = async (formId: string, updates: Partial<Form>) => {
    try {
      const response = await fetch(`/api/forms/${formId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      })
      
      if (response.ok) {
        fetchForms() // Refresh the list
        setSelectedForm(null)
      }
    } catch (error) {
      console.error('Error updating form:', error)
    }
  }

  const deleteForm = async (formId: string) => {
    if (!confirm('Are you sure you want to delete this form?')) return
    
    try {
      const response = await fetch(`/api/forms/${formId}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        fetchForms() // Refresh the list
        setSelectedForm(null)
      }
    } catch (error) {
      console.error('Error deleting form:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'in_progress': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800'
      case 'unpaid': return 'bg-red-100 text-red-800'
      case 'refunded': return 'bg-orange-100 text-orange-800'
      case 'failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Forms Dashboard</h1>
          <p className="text-stone-600">Track form submissions, payments, and task completion</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
          >
            <div className="text-2xl font-bold text-navy">{stats.total}</div>
            <div className="text-sm text-stone-600">Total Forms</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
          >
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-sm text-stone-600">Pending</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
          >
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <div className="text-sm text-stone-600">Completed</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
          >
            <div className="text-2xl font-bold text-green-600">{stats.paid}</div>
            <div className="text-sm text-stone-600">Paid</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
          >
            <div className="text-2xl font-bold text-red-600">{stats.unpaid}</div>
            <div className="text-sm text-stone-600">Unpaid</div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Page</label>
              <select
                value={filters.page}
                onChange={(e) => setFilters(prev => ({ ...prev, page: e.target.value }))}
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <option value="">All Pages</option>
                <option value="/">Homepage</option>
                <option value="/contact">Contact</option>
                <option value="/pricing">Pricing</option>
                <option value="/services">Services</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Payment Status</label>
              <select
                value={filters.paymentStatus}
                onChange={(e) => setFilters(prev => ({ ...prev, paymentStatus: e.target.value }))}
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <option value="">All Payment Statuses</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="refunded">Refunded</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Forms Table */}
        <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy mx-auto"></div>
              <p className="mt-2 text-stone-600">Loading forms...</p>
            </div>
          ) : forms.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-stone-600">No forms found matching your filters.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Task
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-stone-200">
                  {forms.map((form) => (
                    <tr key={form.id} className="hover:bg-stone-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-stone-900">
                            {form.customerContact.name || 'N/A'}
                          </div>
                          <div className="text-sm text-stone-500">
                            {form.customerContact.email || 'N/A'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-stone-900">{form.page}</div>
                        <div className="text-sm text-stone-500">{form.formType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(form.status)}`}>
                          {form.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(form.paymentStatus)}`}>
                            {form.paymentStatus}
                          </span>
                          {form.paymentAmount > 0 && (
                            <span className="text-sm text-stone-600">
                              ${form.paymentAmount}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          form.taskCompleted 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {form.taskCompleted ? 'Completed' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                        {new Date(form.submittedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedForm(form)}
                          className="text-navy hover:text-navy-dark mr-3"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteForm(form.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Form Detail Modal */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-navy">Form Details</h2>
                <button
                  onClick={() => setSelectedForm(null)}
                  className="text-stone-400 hover:text-stone-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Customer Info */}
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-3">Customer Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Name</label>
                      <input
                        type="text"
                        value={selectedForm.customerContact.name}
                        onChange={(e) => setSelectedForm(prev => prev ? {
                          ...prev,
                          customerContact: { ...prev.customerContact, name: e.target.value }
                        } : null)}
                        className="mt-1 w-full px-3 py-2 border border-stone-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Email</label>
                      <input
                        type="email"
                        value={selectedForm.customerContact.email}
                        onChange={(e) => setSelectedForm(prev => prev ? {
                          ...prev,
                          customerContact: { ...prev.customerContact, email: e.target.value }
                        } : null)}
                        className="mt-1 w-full px-3 py-2 border border-stone-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Status Updates */}
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-3">Status & Progress</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Status</label>
                      <select
                        value={selectedForm.status}
                        onChange={(e) => setSelectedForm(prev => prev ? { ...prev, status: e.target.value as any } : null)}
                        className="mt-1 w-full px-3 py-2 border border-stone-300 rounded-md"
                      >
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Payment Status</label>
                      <select
                        value={selectedForm.paymentStatus}
                        onChange={(e) => setSelectedForm(prev => prev ? { ...prev, paymentStatus: e.target.value as any } : null)}
                        className="mt-1 w-full px-3 py-2 border border-stone-300 rounded-md"
                      >
                        <option value="unpaid">Unpaid</option>
                        <option value="paid">Paid</option>
                        <option value="refunded">Refunded</option>
                        <option value="failed">Failed</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Task Completion */}
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-3">Task Management</h3>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selectedForm.taskCompleted}
                      onChange={(e) => setSelectedForm(prev => prev ? { ...prev, taskCompleted: e.target.checked } : null)}
                      className="h-4 w-4 text-navy focus:ring-navy border-stone-300 rounded"
                    />
                    <label className="text-sm font-medium text-stone-700">Mark task as completed</label>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-3">Notes</h3>
                  <textarea
                    value={selectedForm.notes}
                    onChange={(e) => setSelectedForm(prev => prev ? { ...prev, notes: e.target.value } : null)}
                    rows={4}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md"
                    placeholder="Add notes about this form submission..."
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-3 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setSelectedForm(null)}
                    className="px-4 py-2 text-sm font-medium text-stone-700 bg-stone-100 border border-stone-300 rounded-md hover:bg-stone-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (selectedForm) {
                        updateFormStatus(selectedForm.id, selectedForm)
                      }
                    }}
                    className="px-4 py-2 text-sm font-medium text-white bg-navy border border-transparent rounded-md hover:bg-navy-dark"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
