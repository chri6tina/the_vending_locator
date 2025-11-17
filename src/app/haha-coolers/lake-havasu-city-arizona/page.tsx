import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lake Havasu City, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lake Havasu City, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lake Havasu City businesses.',
  keywords: 'haha coolers Lake Havasu City, smart vending Lake Havasu City Arizona, grab and go cooler Lake Havasu City, cashless vending Lake Havasu City',
  openGraph: {
    title: 'Haha Smart Coolers in Lake Havasu City, Arizona',
    description: 'Revolutionary grab & go vending technology for Lake Havasu City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lake-havasu-city-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lake-havasu-city-arizona',
  },
};

export default function LakeHavasuCityArizonaCoolerPageMetadata() {
  return <PageClient />;
}
