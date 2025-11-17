import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yorba Linda, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yorba Linda, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yorba Linda businesses.',
  keywords: 'haha coolers Yorba Linda, smart vending Yorba Linda California, grab and go cooler Yorba Linda, cashless vending Yorba Linda',
  openGraph: {
    title: 'Haha Smart Coolers in Yorba Linda, California',
    description: 'Revolutionary grab & go vending technology for Yorba Linda businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yorba-linda-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yorba-linda-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function YorbaLindaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
