import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Capitol Hill, Washington DC | Premium Lead Database',
  description: 'Access verified vending machine locations in Capitol Hill, Washington DC. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Capitol Hill, vending leads Washington DC, Capitol Hill vending opportunities, vending machine business DC',
  openGraph: {
    title: 'Vending Machine Locations in Capitol Hill, Washington DC | Premium Lead Database',
    description: 'Access verified vending machine locations in Capitol Hill, Washington DC. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/capitol-hill-washington-dc',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/capitol-hill-washington-dc',
  },
};

export default function CapitolHillPage() {
  return <PageClient />;
}
