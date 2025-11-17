import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Griffin, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Griffin, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Griffin businesses.',
  keywords: 'haha coolers Griffin, smart vending Griffin Georgia, grab and go cooler Griffin, cashless vending Griffin',
  openGraph: {
    title: 'Haha Smart Coolers in Griffin, Georgia',
    description: 'Revolutionary grab & go vending technology for Griffin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/griffin-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/griffin-georgia',
  },
};

export default function GriffinGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
