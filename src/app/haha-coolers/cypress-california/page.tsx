import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cypress, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cypress, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cypress businesses.',
  keywords: 'haha coolers Cypress, smart vending Cypress California, grab and go cooler Cypress, cashless vending Cypress',
  openGraph: {
    title: 'Haha Smart Coolers in Cypress, California',
    description: 'Revolutionary grab & go vending technology for Cypress businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cypress-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cypress-california',
  },
};

export default function CypressCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
