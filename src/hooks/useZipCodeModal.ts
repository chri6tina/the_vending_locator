import { useState } from 'react'

export interface Package {
  name: string
  price: string
  description: string
  location: string
  href: string
  type: 'subscription' | 'one-time'
}

export function useZipCodeModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)

  const openModal = (packageData: Package) => {
    console.log('useZipCodeModal: Opening modal for package:', packageData.name) // Debug log
    setSelectedPackage(packageData)
    setIsModalOpen(true)
    console.log('useZipCodeModal: Modal state set to open') // Debug log
  }

  const closeModal = () => {
    console.log('useZipCodeModal: Closing modal') // Debug log
    setIsModalOpen(false)
    setSelectedPackage(null)
  }

  return {
    isModalOpen,
    selectedPackage,
    openModal,
    closeModal
  }
}
