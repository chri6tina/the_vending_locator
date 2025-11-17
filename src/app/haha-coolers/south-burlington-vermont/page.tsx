import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in South Burlington, Vermont | Grab & Go Vending',
  description: 'Discover Haha smart coolers in South Burlington, Vermont. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for South Burlington businesses.',
  keywords: 'haha coolers South Burlington, smart vending South Burlington Vermont, grab and go cooler South Burlington, cashless vending South Burlington',
  openGraph: {
    title: 'Haha Smart Coolers in South Burlington, Vermont',
    description: 'Revolutionary grab & go vending technology for South Burlington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/south-burlington-vermont',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/south-burlington-vermont',
  },
};

export default function SouthBurlingtonVermontCoolerPageMetadata() {
  return <PageClient />;
}
