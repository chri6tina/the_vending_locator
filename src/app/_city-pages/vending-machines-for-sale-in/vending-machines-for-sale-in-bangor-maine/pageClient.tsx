'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { bangorContent } from '@/config/locationPages'

export default function BangorPage() {
  return <LocationPageTemplate content={bangorContent} />
}

