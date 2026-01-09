'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { anchorageContent } from '@/config/locationPages'

export default function AnchoragePage() {
  return <LocationPageTemplate content={anchorageContent} />
}

