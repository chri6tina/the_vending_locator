import { Metadata } from 'next'
import PageClient from './pageClient'
import AdminAuthGuard from '@/components/AdminAuthGuard'

export const metadata: Metadata = {
  "title": "Admin Dashboard - The Vending Locator",
  "description": "Admin dashboard for The Vending Locator",
  "robots": {
    "index": false,
    "follow": false
  }
}

export default function Page() {
  return (
    <AdminAuthGuard>
      <PageClient />
    </AdminAuthGuard>
  )
}