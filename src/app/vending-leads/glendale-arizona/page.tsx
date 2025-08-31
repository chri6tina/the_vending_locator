import { Metadata } from 'next';
import GlendaleArizonaClient from './GlendaleArizonaClient';

export const metadata: Metadata = {
  title: 'Vending Machine Opportunities in Glendale, Arizona | The Vending Locator',
  description: 'Glendale, Arizona\'s seventh-largest city, offers diverse opportunities in sports, entertainment, healthcare, and retail sectors. Expert team handling outreach and guaranteed placement.',
  keywords: 'vending machines, Glendale Arizona, business opportunities, vending locations, Arizona vending, sports venues, healthcare',
  openGraph: {
    title: 'Vending Machine Opportunities in Glendale, Arizona',
    description: 'Glendale, Arizona\'s seventh-largest city, offers diverse opportunities in sports, entertainment, healthcare, and retail sectors.',
    url: 'https://www.thevendinglocator.com/vending-leads/glendale-arizona',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Opportunities in Glendale, Arizona',
    description: 'Glendale, Arizona\'s seventh-largest city, offers diverse opportunities in sports, entertainment, healthcare, and retail sectors.',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/glendale-arizona',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GlendaleArizonaPage() {
  return <GlendaleArizonaClient />;
}
