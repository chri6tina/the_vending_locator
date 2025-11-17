import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Newton, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Newton, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Newton businesses.',
  keywords: 'haha coolers Newton, smart vending Newton Massachusetts, grab and go cooler Newton, cashless vending Newton',
  openGraph: {
    title: 'Haha Smart Coolers in Newton, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Newton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/newton-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/newton-massachusetts',
  },
};

export default function NewtonMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
