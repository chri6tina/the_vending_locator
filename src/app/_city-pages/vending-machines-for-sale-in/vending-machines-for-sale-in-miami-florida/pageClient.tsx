'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { miamiContent } from '@/config/locationPages'

export default function MiamiPage() {
  return <LocationPageTemplate content={miamiContent} />
}

