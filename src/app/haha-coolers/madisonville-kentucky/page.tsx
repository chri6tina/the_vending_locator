import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Madisonville, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Madisonville, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Madisonville businesses.',
  keywords: 'haha coolers Madisonville, smart vending Madisonville Kentucky, grab and go cooler Madisonville, cashless vending Madisonville',
  openGraph: {
    title: 'Haha Smart Coolers in Madisonville, Kentucky',
    description: 'Revolutionary grab & go vending technology for Madisonville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/madisonville-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/madisonville-kentucky',
  },
};

export default function MadisonvilleKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
