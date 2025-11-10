'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { beaumontContent } from '@/config/locationPages'

export default function BeaumontPage() {
  return <LocationPageTemplate content={beaumontContent} />
}

