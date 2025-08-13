'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useZipCodeModal, Package } from '@/hooks/useZipCodeModal'

interface ZipCodeModalContextType {
  isModalOpen: boolean
  selectedPackage: Package | null
  openModal: (packageData: Package) => void
  closeModal: () => void
}

const ZipCodeModalContext = createContext<ZipCodeModalContextType | undefined>(undefined)

export function ZipCodeModalProvider({ children }: { children: ReactNode }) {
  const modalState = useZipCodeModal()

  return (
    <ZipCodeModalContext.Provider value={modalState}>
      {children}
    </ZipCodeModalContext.Provider>
  )
}

export function useZipCodeModalContext() {
  const context = useContext(ZipCodeModalContext)
  if (context === undefined) {
    throw new Error('useZipCodeModalContext must be used within a ZipCodeModalProvider')
  }
  return context
}
