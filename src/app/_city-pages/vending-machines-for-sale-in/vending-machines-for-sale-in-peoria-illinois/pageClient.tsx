'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { peoriaContent } from '@/config/locationPages'

export default function PeoriaPage() {
  return <LocationPageTemplate content={peoriaContent} />
}

