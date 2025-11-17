import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Allentown, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Allentown, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Allentown businesses.',
  keywords: 'haha coolers Allentown, smart vending Allentown Pennsylvania, grab and go cooler Allentown, cashless vending Allentown',
  openGraph: {
    title: 'Haha Smart Coolers in Allentown, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Allentown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/allentown-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/allentown-pennsylvania',
  },
};

export default function AllentownPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
