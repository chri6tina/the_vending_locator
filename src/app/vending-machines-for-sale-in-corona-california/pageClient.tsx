'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { coronaCaliforniaContent } from '@/config/locationPages'

export default function CoronaCaliforniaPage() {
  return <LocationPageTemplate content={coronaCaliforniaContent} />
}

