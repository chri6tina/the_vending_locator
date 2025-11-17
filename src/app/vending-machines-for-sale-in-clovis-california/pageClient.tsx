'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { clovisCaliforniaContent } from '@/config/locationPages'

export default function ClovisCaliforniaPage() {
  return <LocationPageTemplate content={clovisCaliforniaContent} />
}

