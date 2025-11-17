'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { laredoContent } from '@/config/locationPages'

export default function LaredoPage() {
  return <LocationPageTemplate content={laredoContent} />
}

