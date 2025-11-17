import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sheboygan, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sheboygan, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sheboygan businesses.',
  keywords: 'haha coolers Sheboygan, smart vending Sheboygan Wisconsin, grab and go cooler Sheboygan, cashless vending Sheboygan',
  openGraph: {
    title: 'Haha Smart Coolers in Sheboygan, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Sheboygan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sheboygan-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sheboygan-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SheboyganWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
