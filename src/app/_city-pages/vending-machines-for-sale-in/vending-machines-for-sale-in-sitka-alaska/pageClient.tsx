'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { sitkaAlaskaContent } from '@/config/locationPages'

export default function SitkaAlaskaPage() {
  return <LocationPageTemplate content={sitkaAlaskaContent} />
}

