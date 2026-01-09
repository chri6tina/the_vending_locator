'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { dentonContent } from '@/config/locationPages'

export default function DentonPage() {
  return <LocationPageTemplate content={dentonContent} />
}
