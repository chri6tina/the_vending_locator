'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { fremontCaliforniaContent } from '@/config/locationPages'

export default function FremontCaliforniaPage() {
  return <LocationPageTemplate content={fremontCaliforniaContent} />
}

