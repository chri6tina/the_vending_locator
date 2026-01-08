import { Metadata } from 'next'
import PageClient from './pageClient'

// Dynamically generate metadata to prevent build-time processing
export async function generateMetadata(): Promise<Metadata> {
  const slug = 'plantation-florida';
  const city = 'Plantation';
  const state = 'Florida';
  
  const title = `Tax & Bookkeeping Services for Vending Machine Owners in ${city}, ${state} - The Vending Locator`;
  const description = `Expert tax preparation and bookkeeping services for vending machine business owners in ${city}, ${state}. Get professional help with taxes, accounting, and financial management.`;
  
  return {
    title,
    description,
    keywords: `vending machine taxes ${city} ${state}, vending business bookkeeping ${city}, tax services vending machines ${city} ${state}, vending machine accounting ${city}, tax preparation vending business ${city}`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/tax-services/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/tax-services/${slug}`,
      siteName: 'The Vending Locator',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
// Skip page data collection during build to prevent memory issues
export const fetchCache = 'force-no-store';

export default function CityPage() {
  return <PageClient />
}
