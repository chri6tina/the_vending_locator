'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { mesaArizonaContent } from '@/config/locationPages'

export default function MesaArizonaPage() {
  return <LocationPageTemplate content={mesaArizonaContent} />
}

