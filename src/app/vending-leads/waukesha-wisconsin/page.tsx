import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Waukesha, Wisconsin | Premium Lead Database',
  description: `Access verified vending machine locations in Waukesha, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities. Premium location intelligence for vending operators.`,
  keywords: 'vending machine locations Waukesha, vending leads Wisconsin, Waukesha vending opportunities, commercial vending locations, vending machine business Waukesha',
  openGraph: {
    title: 'Vending Machine Locations in Waukesha, Wisconsin | Premium Lead Database',
    description: `Access verified vending machine locations in Waukesha, Wisconsin. Get high-quality leads for hospitals, offices, schools, and manufacturing facilities.`,
    type: 'website',
    url: 'https://www.thevendinglocator.com/vending-leads/waukesha-wisconsin',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/waukesha-wisconsin',
  },
};

export default function WaukeshaWisconsinVendingLeadsPage() {
  return <PageClient />;
}
