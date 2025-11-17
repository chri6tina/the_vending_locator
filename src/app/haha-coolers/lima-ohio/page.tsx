import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lima, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lima, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lima businesses.',
  keywords: 'haha coolers Lima, smart vending Lima Ohio, grab and go cooler Lima, cashless vending Lima',
  openGraph: {
    title: 'Haha Smart Coolers in Lima, Ohio',
    description: 'Revolutionary grab & go vending technology for Lima businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lima-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lima-ohio',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LimaOhioCoolerPageMetadata() {
  return <PageClient />;
}
