import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Newnan, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Newnan, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Newnan businesses.',
  keywords: 'haha coolers Newnan, smart vending Newnan Georgia, grab and go cooler Newnan, cashless vending Newnan',
  openGraph: {
    title: 'Haha Smart Coolers in Newnan, Georgia',
    description: 'Revolutionary grab & go vending technology for Newnan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/newnan-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/newnan-georgia',
  },
};

export default function NewnanGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
