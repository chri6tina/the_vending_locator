'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { carsonCityContent } from '@/config/locationPages'

export default function CarsonCityPage() {
  return <LocationPageTemplate content={carsonCityContent} />
}
