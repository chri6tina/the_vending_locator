'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { missoulaContent } from '@/config/locationPages'

export default function MissoulaPage() {
  return <LocationPageTemplate content={missoulaContent} />
}

