import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Henderson, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Henderson, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Henderson businesses.',
  keywords: 'haha coolers Henderson, smart vending Henderson Nevada, grab and go cooler Henderson, cashless vending Henderson',
  openGraph: {
    title: 'Haha Smart Coolers in Henderson, Nevada',
    description: 'Revolutionary grab & go vending technology for Henderson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/henderson-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/henderson-nevada',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HendersonNevadaCoolerPageMetadata() {
  return <PageClient />;
}
