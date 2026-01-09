'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { olatheContent } from '@/config/locationPages'

export default function OlathePage() {
  return <LocationPageTemplate content={olatheContent} />
}

