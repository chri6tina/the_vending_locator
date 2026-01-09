'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { napaCaliforniaContent } from '@/config/locationPages'

export default function NapaCaliforniaPage() {
  return <LocationPageTemplate content={napaCaliforniaContent} />
}

