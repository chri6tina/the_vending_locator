'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { tempeArizonaContent } from '@/config/locationPages'

export default function TempeArizonaPage() {
  return <LocationPageTemplate content={tempeArizonaContent} />
}

