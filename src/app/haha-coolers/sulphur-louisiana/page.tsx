import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sulphur, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sulphur, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sulphur businesses.',
  keywords: 'haha coolers Sulphur, smart vending Sulphur Louisiana, grab and go cooler Sulphur, cashless vending Sulphur',
  openGraph: {
    title: 'Haha Smart Coolers in Sulphur, Louisiana',
    description: 'Revolutionary grab & go vending technology for Sulphur businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sulphur-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sulphur-louisiana',
  },
};

export default function SulphurLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
