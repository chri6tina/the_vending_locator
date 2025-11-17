'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { napervilleContent } from '@/config/locationPages'

export default function NapervillePage() {
  return <LocationPageTemplate content={napervilleContent} />
}

