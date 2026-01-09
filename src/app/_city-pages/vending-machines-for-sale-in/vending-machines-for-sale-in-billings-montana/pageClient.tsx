'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { billingsContent } from '@/config/locationPages'

export default function BillingsPage() {
  return <LocationPageTemplate content={billingsContent} />
}

