import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bossier City, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bossier City, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bossier City businesses.',
  keywords: 'haha coolers Bossier City, smart vending Bossier City Louisiana, grab and go cooler Bossier City, cashless vending Bossier City',
  openGraph: {
    title: 'Haha Smart Coolers in Bossier City, Louisiana',
    description: 'Revolutionary grab & go vending technology for Bossier City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bossier-city-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bossier-city-louisiana',
  },
};

export default function BossierCityLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
