'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { tucsonArizonaContent } from '@/config/locationPages'

export default function TucsonArizonaPage() {
  return <LocationPageTemplate content={tucsonArizonaContent} />
}

