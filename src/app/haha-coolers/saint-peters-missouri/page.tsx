import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saint Peters, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saint Peters, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saint Peters businesses.',
  keywords: 'haha coolers Saint Peters, smart vending Saint Peters Missouri, grab and go cooler Saint Peters, cashless vending Saint Peters',
  openGraph: {
    title: 'Haha Smart Coolers in Saint Peters, Missouri',
    description: 'Revolutionary grab & go vending technology for Saint Peters businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saint-peters-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saint-peters-missouri',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SaintPetersMissouriCoolerPageMetadata() {
  return <PageClient />;
}
