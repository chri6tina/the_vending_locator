'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { conwayContent } from '@/config/locationPages'

export default function ConwayPage() {
  return <LocationPageTemplate content={conwayContent} />
}
