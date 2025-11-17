import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Livonia, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Livonia, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Livonia businesses.',
  keywords: 'haha coolers Livonia, smart vending Livonia Michigan, grab and go cooler Livonia, cashless vending Livonia',
  openGraph: {
    title: 'Haha Smart Coolers in Livonia, Michigan',
    description: 'Revolutionary grab & go vending technology for Livonia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/livonia-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/livonia-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LivoniaMichiganCoolerPageMetadata() {
  return <PageClient />;
}
