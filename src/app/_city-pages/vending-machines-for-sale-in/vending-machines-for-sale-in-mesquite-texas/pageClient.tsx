'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { mesquiteContent } from '@/config/locationPages'

export default function MesquitePage() {
  return <LocationPageTemplate content={mesquiteContent} />
}

