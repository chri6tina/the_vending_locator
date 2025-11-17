'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { renoContent } from '@/config/locationPages'

export default function RenoPage() {
  return <LocationPageTemplate content={renoContent} />
}

