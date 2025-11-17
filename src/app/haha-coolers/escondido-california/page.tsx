import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Escondido, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Escondido, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Escondido businesses.',
  keywords: 'haha coolers Escondido, smart vending Escondido California, grab and go cooler Escondido, cashless vending Escondido',
  openGraph: {
    title: 'Haha Smart Coolers in Escondido, California',
    description: 'Revolutionary grab & go vending technology for Escondido businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/escondido-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/escondido-california',
  },
};

export default function EscondidoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
