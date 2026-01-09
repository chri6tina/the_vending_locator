'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { biloxiContent } from '@/config/locationPages'

export default function BiloxiPage() {
  return <LocationPageTemplate content={biloxiContent} />
}

