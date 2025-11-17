import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fort Pierce, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fort Pierce, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fort Pierce businesses.',
  keywords: 'haha coolers Fort Pierce, smart vending Fort Pierce Florida, grab and go cooler Fort Pierce, cashless vending Fort Pierce',
  openGraph: {
    title: 'Haha Smart Coolers in Fort Pierce, Florida',
    description: 'Revolutionary grab & go vending technology for Fort Pierce businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fort-pierce-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fort-pierce-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FortPierceFloridaCoolerPageMetadata() {
  return <PageClient />;
}
