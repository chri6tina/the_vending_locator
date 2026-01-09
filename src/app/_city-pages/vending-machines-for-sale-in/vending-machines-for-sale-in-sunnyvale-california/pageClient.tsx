'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { sunnyvaleCaliforniaContent } from '@/config/locationPages'

export default function SunnyvaleCaliforniaPage() {
  return <LocationPageTemplate content={sunnyvaleCaliforniaContent} />
}

