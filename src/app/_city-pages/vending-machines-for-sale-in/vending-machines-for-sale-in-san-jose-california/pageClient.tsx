'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { sanJoseCaliforniaContent } from '@/config/locationPages'

export default function SanJoseCaliforniaPage() {
  return <LocationPageTemplate content={sanJoseCaliforniaContent} />
}

