'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { peoriaArizonaContent } from '@/config/locationPages'

export default function PeoriaArizonaPage() {
  return <LocationPageTemplate content={peoriaArizonaContent} />
}

