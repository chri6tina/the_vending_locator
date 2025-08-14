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
    setSelectedPackage(packageData)
    setIsModalOpen(true)
  }

  const closeModal = () => {
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
