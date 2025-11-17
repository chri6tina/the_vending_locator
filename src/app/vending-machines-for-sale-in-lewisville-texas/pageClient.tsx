'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { lewisvilleContent } from '@/config/locationPages'

export default function LewisvillePage() {
  return <LocationPageTemplate content={lewisvilleContent} />
}

