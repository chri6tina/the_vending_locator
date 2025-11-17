import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mansfield, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mansfield, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mansfield businesses.',
  keywords: 'haha coolers Mansfield, smart vending Mansfield Ohio, grab and go cooler Mansfield, cashless vending Mansfield',
  openGraph: {
    title: 'Haha Smart Coolers in Mansfield, Ohio',
    description: 'Revolutionary grab & go vending technology for Mansfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mansfield-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mansfield-ohio',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MansfieldOhioCoolerPageMetadata() {
  return <PageClient />;
}
