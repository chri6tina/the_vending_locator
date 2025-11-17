'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { mcallenContent } from '@/config/locationPages'

export default function McAllenPage() {
  return <LocationPageTemplate content={mcallenContent} />
}

