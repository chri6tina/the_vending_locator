'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { mobileAlabamaContent } from '@/config/locationPages'

export default function MobileAlabamaPage() {
  return <LocationPageTemplate content={mobileAlabamaContent} />
}

