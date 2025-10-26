import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Merrimack, NH | Premium Lead Database',
  description: 'Access verified vending machine locations in Merrimack, New Hampshire. Connect with high-traffic venues actively seeking vending services. Start growing your vending business today.',
  keywords: 'vending machine locations Merrimack, vending leads New Hampshire, Merrimack vending opportunities, vending machine business NH',
  openGraph: {
    title: 'Vending Machine Locations in Merrimack, NH | Premium Lead Database',
    description: 'Access verified vending machine locations in Merrimack, New Hampshire. Connect with high-traffic venues actively seeking vending services.',
    url: 'https://www.thevendinglocator.com/vending-leads/merrimack-new-hampshire',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/merrimack-new-hampshire',
  },
};

export default function MerrimackPage() {
  return <PageClient />;
}
