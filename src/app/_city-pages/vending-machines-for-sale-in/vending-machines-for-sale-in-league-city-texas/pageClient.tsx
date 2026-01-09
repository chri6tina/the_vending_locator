'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { leagueCityContent } from '@/config/locationPages'

export default function LeagueCityPage() {
  return <LocationPageTemplate content={leagueCityContent} />
}

