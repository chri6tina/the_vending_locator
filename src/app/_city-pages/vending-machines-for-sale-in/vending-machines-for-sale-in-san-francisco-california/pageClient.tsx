'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { sanFranciscoCaliforniaContent } from '@/config/locationPages'

export default function SanFranciscoCaliforniaPage() {
  return <LocationPageTemplate content={sanFranciscoCaliforniaContent} />
}

