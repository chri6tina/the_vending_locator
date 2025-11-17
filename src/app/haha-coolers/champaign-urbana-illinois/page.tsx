import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Champaign-Urbana, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Champaign-Urbana, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Champaign-Urbana businesses.',
  keywords: 'haha coolers Champaign-Urbana, smart vending Champaign-Urbana Illinois, grab and go cooler Champaign-Urbana, cashless vending Champaign-Urbana',
  openGraph: {
    title: 'Haha Smart Coolers in Champaign-Urbana, Illinois',
    description: 'Revolutionary grab & go vending technology for Champaign-Urbana businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/champaign-urbana-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/champaign-urbana-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ChampaignUrbanaIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
