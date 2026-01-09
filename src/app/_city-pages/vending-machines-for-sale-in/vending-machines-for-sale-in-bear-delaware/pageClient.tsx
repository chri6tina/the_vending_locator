'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { bearDelawareContent } from '@/config/locationPages'

export default function BearDelawarePage() {
  return <LocationPageTemplate content={bearDelawareContent} />
}

