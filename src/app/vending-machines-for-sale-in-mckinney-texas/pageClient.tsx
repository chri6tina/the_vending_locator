'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { mckinneyContent } from '@/config/locationPages'

export default function McKinneyPage() {
  return <LocationPageTemplate content={mckinneyContent} />
}

