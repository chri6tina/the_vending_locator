import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageClient from './pageClient'

// This will be dynamic
export const dynamic = 'force-dynamic'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thevendinglocator.com'
    const response = await fetch(`${baseUrl}/api/hot-leads/${params.slug}`, {
      next: { revalidate: 0 }
    })
    
    if (!response.ok) {
      return {
        title: 'Lead Not Found | The Vending Locator',
        description: 'This hot lead is not available.'
      }
    }

    const { lead } = await response.json()
    
    return {
      title: `${lead.title} | Hot Vending Lead`,
      description: lead.description || `Premium vending machine location opportunity in ${lead.city}, ${lead.state}. ${lead.employee_count} employees. Available for immediate purchase.`,
      keywords: `vending machine lead, ${lead.city} vending, ${lead.state} vending opportunity, vending location, ${lead.business_type}`,
      openGraph: {
        title: `${lead.title} | Hot Vending Lead`,
        description: lead.description,
        type: 'website',
        url: `https://www.thevendinglocator.com/hot-leads/${params.slug}`,
      },
      alternates: {
        canonical: `https://www.thevendinglocator.com/hot-leads/${params.slug}`,
      },
      robots: {
        index: lead.status === 'available',
        follow: true
      }
    }
  } catch (error) {
    return {
      title: 'Hot Lead | The Vending Locator',
      description: 'Premium vending machine location opportunity'
    }
  }
}

export default function HotLeadPage({ params }: PageProps) {
  return <PageClient slug={params.slug} />
}

