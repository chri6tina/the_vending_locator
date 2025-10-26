import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Downtown DC, Washington DC | Premium Lead Database',
  description: 'Access verified vending machine locations in Downtown DC, Washington DC. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Downtown DC, vending leads Washington DC, Downtown DC vending opportunities, vending machine business DC',
  openGraph: {
    title: 'Vending Machine Locations in Downtown DC, Washington DC | Premium Lead Database',
    description: 'Access verified vending machine locations in Downtown DC, Washington DC. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/downtown-washington-dc',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/downtown-washington-dc',
  },
};

export default function DowntownDCPage() {
  return <PageClient />;
}
