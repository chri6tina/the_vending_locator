'use client'

import { use } from 'react'
import Link from 'next/link'
import BlogPostEditor from '../../../../../components/BlogPostEditor'
import AdminAuthGuard from '../../../../../components/AdminAuthGuard'

function EditBlogPostContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/admin/blog/posts"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Posts
          </Link>
        </div>
      </div>
      <BlogPostEditor postId={id} />
    </div>
  )
}

export default function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  return (
    <AdminAuthGuard>
      <EditBlogPostContent params={params} />
    </AdminAuthGuard>
  )
}

