import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cleveland, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cleveland, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cleveland businesses.',
  keywords: 'haha coolers Cleveland, smart vending Cleveland Ohio, grab and go cooler Cleveland, cashless vending Cleveland',
  openGraph: {
    title: 'Haha Smart Coolers in Cleveland, Ohio',
    description: 'Revolutionary grab & go vending technology for Cleveland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cleveland-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cleveland-ohio',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ClevelandOhioCoolerPageMetadata() {
  return <PageClient />;
}
