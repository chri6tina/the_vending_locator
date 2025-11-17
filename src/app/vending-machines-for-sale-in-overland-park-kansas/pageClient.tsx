'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { overlandParkContent } from '@/config/locationPages'

export default function OverlandParkPage() {
  return <LocationPageTemplate content={overlandParkContent} />
}

