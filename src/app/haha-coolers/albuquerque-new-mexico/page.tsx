import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Albuquerque, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Albuquerque, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Albuquerque businesses.',
  keywords: 'haha coolers Albuquerque, smart vending Albuquerque New Mexico, grab and go cooler Albuquerque, cashless vending Albuquerque',
  openGraph: {
    title: 'Haha Smart Coolers in Albuquerque, New Mexico',
    description: 'Revolutionary grab & go vending technology for Albuquerque businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/albuquerque-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/albuquerque-new-mexico',
  },
};

export default function AlbuquerqueNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
