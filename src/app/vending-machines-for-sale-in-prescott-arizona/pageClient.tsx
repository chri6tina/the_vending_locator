'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { prescottArizonaContent } from '@/config/locationPages'

export default function PrescottArizonaPage() {
  return <LocationPageTemplate content={prescottArizonaContent} />
}

