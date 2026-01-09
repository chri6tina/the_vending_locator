'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { portlandMaineContent } from '@/config/locationPages'

export default function PortlandMainePage() {
  return <LocationPageTemplate content={portlandMaineContent} />
}

