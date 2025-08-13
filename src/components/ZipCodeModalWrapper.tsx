'use client'

import ZipCodeModal from './ZipCodeModal'
import { useZipCodeModalContext } from '@/contexts/ZipCodeModalContext'

export default function ZipCodeModalWrapper() {
  const { isModalOpen, selectedPackage, closeModal } = useZipCodeModalContext()

  return (
    <ZipCodeModal
      isOpen={isModalOpen}
      onClose={closeModal}
      package={selectedPackage}
    />
  )
}
