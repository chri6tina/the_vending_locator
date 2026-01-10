import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Visitor Database | Admin Dashboard",
  description: "Manage and view all website visitors and leads",
  robots: {
    index: false,
    follow: false,
  }
}

export default function VisitorsAdminPage() {
  return <PageClient />
}
