'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { northLasVegasContent } from '@/config/locationPages'

export default function NorthLasVegasPage() {
  return <LocationPageTemplate content={northLasVegasContent} />
}

