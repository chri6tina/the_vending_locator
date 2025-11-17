import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Joplin, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Joplin, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Joplin businesses.',
  keywords: 'haha coolers Joplin, smart vending Joplin Missouri, grab and go cooler Joplin, cashless vending Joplin',
  openGraph: {
    title: 'Haha Smart Coolers in Joplin, Missouri',
    description: 'Revolutionary grab & go vending technology for Joplin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/joplin-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/joplin-missouri',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function JoplinMissouriCoolerPageMetadata() {
  return <PageClient />;
}
