'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { bellevueContent } from '@/config/locationPages'

export default function BellevuePage() {
  return <LocationPageTemplate content={bellevueContent} />
}

