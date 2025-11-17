import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oklahoma City, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oklahoma City, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oklahoma City businesses.',
  keywords: 'haha coolers Oklahoma City, smart vending Oklahoma City Oklahoma, grab and go cooler Oklahoma City, cashless vending Oklahoma City',
  openGraph: {
    title: 'Haha Smart Coolers in Oklahoma City, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Oklahoma City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oklahoma-city-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oklahoma-city-oklahoma',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function OklahomaCityOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
