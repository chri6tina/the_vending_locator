'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { decaturContent } from '@/config/locationPages'

export default function DecaturPage() {
  return <LocationPageTemplate content={decaturContent} />
}
