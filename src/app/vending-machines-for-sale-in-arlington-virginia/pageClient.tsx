'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { arlingtonContent } from '@/config/locationPages'

export default function ArlingtonPage() {
  return <LocationPageTemplate content={arlingtonContent} />
}

