'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { plantationFloridaContent } from '@/config/locationPages'

export default function PlantationFloridaPage() {
  return <LocationPageTemplate content={plantationFloridaContent} />
}

