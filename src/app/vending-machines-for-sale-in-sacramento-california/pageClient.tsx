'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { sacramentoCaliforniaContent } from '@/config/locationPages'

export default function SacramentoCaliforniaPage() {
  return <LocationPageTemplate content={sacramentoCaliforniaContent} />
}

