'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { homerContent } from '@/config/locationPages'

export default function HomerPage() {
  return <LocationPageTemplate content={homerContent} />
}

