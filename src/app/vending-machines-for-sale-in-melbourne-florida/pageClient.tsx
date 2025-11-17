'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { melbourneFloridaContent } from '@/config/locationPages'

export default function MelbourneFloridaPage() {
  return <LocationPageTemplate content={melbourneFloridaContent} />
}

