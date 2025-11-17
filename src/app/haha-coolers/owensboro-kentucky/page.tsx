import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Owensboro, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Owensboro, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Owensboro businesses.',
  keywords: 'haha coolers Owensboro, smart vending Owensboro Kentucky, grab and go cooler Owensboro, cashless vending Owensboro',
  openGraph: {
    title: 'Haha Smart Coolers in Owensboro, Kentucky',
    description: 'Revolutionary grab & go vending technology for Owensboro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/owensboro-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/owensboro-kentucky',
  },
};

export default function OwensboroKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
