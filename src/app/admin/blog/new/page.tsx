'use client'

import BlogPostEditor from '../../../../components/BlogPostEditor'
import AdminAuthGuard from '../../../../components/AdminAuthGuard'
import AdminNav from '../../../../components/AdminNav'

function NewBlogPostContent() {
  return (
    <div className="min-h-screen bg-warm-white">
      <AdminNav />
      <BlogPostEditor />
    </div>
  )
}

export default function NewBlogPost() {
  return (
    <AdminAuthGuard>
      <NewBlogPostContent />
    </AdminAuthGuard>
  )
}

