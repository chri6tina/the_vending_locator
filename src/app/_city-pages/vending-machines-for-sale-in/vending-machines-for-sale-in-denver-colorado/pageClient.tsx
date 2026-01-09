'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { denverColoradoContent } from '@/config/locationPages'

export default function DenverColoradoPage() {
  return <LocationPageTemplate content={denverColoradoContent} />
}

