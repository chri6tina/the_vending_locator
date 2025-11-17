import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mission Viejo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mission Viejo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mission Viejo businesses.',
  keywords: 'haha coolers Mission Viejo, smart vending Mission Viejo California, grab and go cooler Mission Viejo, cashless vending Mission Viejo',
  openGraph: {
    title: 'Haha Smart Coolers in Mission Viejo, California',
    description: 'Revolutionary grab & go vending technology for Mission Viejo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mission-viejo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mission-viejo-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MissionViejoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
