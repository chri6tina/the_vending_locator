import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kalispell, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kalispell, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kalispell businesses.',
  keywords: 'haha coolers Kalispell, smart vending Kalispell Montana, grab and go cooler Kalispell, cashless vending Kalispell',
  openGraph: {
    title: 'Haha Smart Coolers in Kalispell, Montana',
    description: 'Revolutionary grab & go vending technology for Kalispell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kalispell-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kalispell-montana',
  },
};

export default function KalispellMontanaCoolerPageMetadata() {
  return <PageClient />;
}
