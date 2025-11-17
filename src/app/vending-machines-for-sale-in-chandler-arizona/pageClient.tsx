'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { chandlerArizonaContent } from '@/config/locationPages'

export default function ChandlerArizonaPage() {
  return <LocationPageTemplate content={chandlerArizonaContent} />
}

