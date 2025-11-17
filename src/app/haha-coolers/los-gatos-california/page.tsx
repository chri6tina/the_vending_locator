import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Los Gatos, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Los Gatos, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Los Gatos businesses.',
  keywords: 'haha coolers Los Gatos, smart vending Los Gatos California, grab and go cooler Los Gatos, cashless vending Los Gatos',
  openGraph: {
    title: 'Haha Smart Coolers in Los Gatos, California',
    description: 'Revolutionary grab & go vending technology for Los Gatos businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/los-gatos-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/los-gatos-california',
  },
};

export default function LosGatosCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
