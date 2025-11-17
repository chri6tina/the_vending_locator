import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pacifica, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pacifica, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pacifica businesses.',
  keywords: 'haha coolers Pacifica, smart vending Pacifica California, grab and go cooler Pacifica, cashless vending Pacifica',
  openGraph: {
    title: 'Haha Smart Coolers in Pacifica, California',
    description: 'Revolutionary grab & go vending technology for Pacifica businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pacifica-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pacifica-california',
  },
};

export default function PacificaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
