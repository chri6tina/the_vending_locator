'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { molineContent } from '@/config/locationPages'

export default function MolinePage() {
  return <LocationPageTemplate content={molineContent} />
}

