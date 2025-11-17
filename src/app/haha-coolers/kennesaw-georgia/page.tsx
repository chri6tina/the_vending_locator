import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kennesaw, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kennesaw, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kennesaw businesses.',
  keywords: 'haha coolers Kennesaw, smart vending Kennesaw Georgia, grab and go cooler Kennesaw, cashless vending Kennesaw',
  openGraph: {
    title: 'Haha Smart Coolers in Kennesaw, Georgia',
    description: 'Revolutionary grab & go vending technology for Kennesaw businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kennesaw-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kennesaw-georgia',
  },
};

export default function KennesawGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
