import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Deltona, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Deltona, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Deltona businesses.',
  keywords: 'haha coolers Deltona, smart vending Deltona Florida, grab and go cooler Deltona, cashless vending Deltona',
  openGraph: {
    title: 'Haha Smart Coolers in Deltona, Florida',
    description: 'Revolutionary grab & go vending technology for Deltona businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/deltona-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/deltona-florida',
  },
};

export default function DeltonaFloridaCoolerPageMetadata() {
  return <PageClient />;
}
