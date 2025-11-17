import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mount Prospect, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mount Prospect, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mount Prospect businesses.',
  keywords: 'haha coolers Mount Prospect, smart vending Mount Prospect Illinois, grab and go cooler Mount Prospect, cashless vending Mount Prospect',
  openGraph: {
    title: 'Haha Smart Coolers in Mount Prospect, Illinois',
    description: 'Revolutionary grab & go vending technology for Mount Prospect businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mount-prospect-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mount-prospect-illinois',
  },
};

export default function MountProspectIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
