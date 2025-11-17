'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { sanDiegoCaliforniaContent } from '@/config/locationPages'

export default function SanDiegoCaliforniaPage() {
  return <LocationPageTemplate content={sanDiegoCaliforniaContent} />
}

