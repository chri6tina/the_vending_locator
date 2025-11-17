import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Crystal Lake, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Crystal Lake, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Crystal Lake businesses.',
  keywords: 'haha coolers Crystal Lake, smart vending Crystal Lake Illinois, grab and go cooler Crystal Lake, cashless vending Crystal Lake',
  openGraph: {
    title: 'Haha Smart Coolers in Crystal Lake, Illinois',
    description: 'Revolutionary grab & go vending technology for Crystal Lake businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/crystal-lake-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/crystal-lake-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CrystalLakeIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
