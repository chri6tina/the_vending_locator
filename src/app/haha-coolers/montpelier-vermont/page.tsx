import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Montpelier, Vermont | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Montpelier, Vermont. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Montpelier businesses.',
  keywords: 'haha coolers Montpelier, smart vending Montpelier Vermont, grab and go cooler Montpelier, cashless vending Montpelier',
  openGraph: {
    title: 'Haha Smart Coolers in Montpelier, Vermont',
    description: 'Revolutionary grab & go vending technology for Montpelier businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/montpelier-vermont',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/montpelier-vermont',
  },
};

export default function MontpelierVermontCoolerPageMetadata() {
  return <PageClient />;
}
