'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { pearlandContent } from '@/config/locationPages'

export default function PearlandPage() {
  return <LocationPageTemplate content={pearlandContent} />
}

