'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { bozemanContent } from '@/config/locationPages'

export default function BozemanPage() {
  return <LocationPageTemplate content={bozemanContent} />
}
