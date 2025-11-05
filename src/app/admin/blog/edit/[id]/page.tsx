'use client'

import { use } from 'react'
import BlogPostEditor from '../../../../../components/BlogPostEditor'
import AdminAuthGuard from '../../../../../components/AdminAuthGuard'
import AdminNav from '../../../../../components/AdminNav'

function EditBlogPostContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <div className="min-h-screen bg-warm-white">
      <AdminNav />
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

