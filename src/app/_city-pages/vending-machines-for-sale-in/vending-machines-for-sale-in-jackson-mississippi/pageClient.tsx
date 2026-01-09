'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { jacksonContent } from '@/config/locationPages'

export default function JacksonPage() {
  return <LocationPageTemplate content={jacksonContent} />
}

