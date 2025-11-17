import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Valley City, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Valley City, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Valley City businesses.',
  keywords: 'haha coolers West Valley City, smart vending West Valley City Utah, grab and go cooler West Valley City, cashless vending West Valley City',
  openGraph: {
    title: 'Haha Smart Coolers in West Valley City, Utah',
    description: 'Revolutionary grab & go vending technology for West Valley City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-valley-city-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-valley-city-utah',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WestValleyCityUtahCoolerPageMetadata() {
  return <PageClient />;
}
