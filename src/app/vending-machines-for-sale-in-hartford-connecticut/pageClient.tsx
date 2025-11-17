'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { hartfordContent } from '@/config/locationPages'

export default function HartfordPage() {
  return <LocationPageTemplate content={hartfordContent} />
}

