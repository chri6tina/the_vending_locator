'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { hawthorneCaliforniaContent } from '@/config/locationPages'

export default function HawthorneCaliforniaPage() {
  return <LocationPageTemplate content={hawthorneCaliforniaContent} />
}

