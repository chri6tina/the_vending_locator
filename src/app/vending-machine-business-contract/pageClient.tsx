'use client'

import { useMemo, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type ContractFormState = {
  operatorName: string
  operatorCompany: string
  operatorEmail: string
  operatorPhone: string
  operatorAddress: string
  locationBusinessName: string
  locationContactName: string
  locationAddress: string
  machineType: string
  machineQuantity: string
  products: string
  commissionEnabled: string
  commissionRate: string
  payoutSchedule: string
  payoutDueDays: string
  startDate: string
  termMonths: string
  placementArea: string
  restockFrequency: string
  serviceHours: string
  cancellationNoticeDays: string
  exclusivity: string
  electricityProvided: string
  insuranceCoverage: string
  liabilityLimit: string
  damageResponsibility: string
  relocationNoticeDays: string
  lateFee: string
  pricingControl: string
  reportingFrequency: string
  accessRequirements: string
  governingState: string
  additionalTerms: string
}

const initialState: ContractFormState = {
  operatorName: '',
  operatorCompany: '',
  operatorEmail: '',
  operatorPhone: '',
  operatorAddress: '',
  locationBusinessName: '',
  locationContactName: '',
  locationAddress: '',
  machineType: '',
  machineQuantity: '1',
  products: '',
  commissionEnabled: 'No',
  commissionRate: '',
  payoutSchedule: 'Monthly',
  payoutDueDays: '15',
  startDate: '',
  termMonths: '12',
  placementArea: '',
  restockFrequency: 'Weekly',
  serviceHours: '9:00 AM - 5:00 PM',
  cancellationNoticeDays: '30',
  exclusivity: 'Non-exclusive',
  electricityProvided: 'Yes',
  insuranceCoverage: 'General liability coverage carried by Operator',
  liabilityLimit: '$1,000,000 per occurrence',
  damageResponsibility: 'Location is responsible for damage caused by its employees or guests',
  relocationNoticeDays: '7',
  lateFee: '1.5% per month on overdue balances',
  pricingControl: 'Operator controls product selection and pricing',
  reportingFrequency: 'Monthly',
  accessRequirements: 'Location will provide access during normal business hours',
  governingState: '',
  additionalTerms: ''
}

export default function VendingMachineBusinessContractPage() {
  const [formData, setFormData] = useState<ContractFormState>(initialState)
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  )
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contractText = useMemo(() => {
    const safe = (value: string, fallback: string) =>
      value.trim().length > 0 ? value.trim() : fallback

    const startDate = safe(formData.startDate, '[Start Date]')
    const termMonths = safe(formData.termMonths, '[Term Length]')
    const commissionRate = safe(formData.commissionRate, '[Commission Rate]')
    const cancellationNoticeDays = safe(formData.cancellationNoticeDays, '[Notice Period]')
    const governingState = safe(formData.governingState, '[Governing State]')
    const additionalTerms = formData.additionalTerms.trim()

    const commissionEnabled = formData.commissionEnabled === 'Yes'

    return `VENDING MACHINE PLACEMENT AGREEMENT

This Vending Machine Placement Agreement ("Agreement") is made on ${startDate} by and between:

Operator: ${safe(formData.operatorName, '[Operator Name]')}
Company: ${safe(formData.operatorCompany, '[Operator Company]')}
Address: ${safe(formData.operatorAddress, '[Operator Address]')}
Phone: ${safe(formData.operatorPhone, '[Operator Phone]')}
Email: ${safe(formData.operatorEmail, '[Operator Email]')}

Location: ${safe(formData.locationBusinessName, '[Location Business Name]')}
Contact: ${safe(formData.locationContactName, '[Location Contact Name]')}
Address: ${safe(formData.locationAddress, '[Location Address]')}

1. Placement & Equipment
The Operator will place the following vending equipment at the Location:
- Machine Type(s): ${safe(formData.machineType, '[Machine Type(s)]')}
- Quantity: ${safe(formData.machineQuantity, '[Quantity]')}
- Products: ${safe(formData.products, '[Products Offered]')}
- Placement Area: ${safe(formData.placementArea, '[Placement Area]')}
Exclusivity: ${safe(formData.exclusivity, '[Exclusivity]')}.

2. Term
This Agreement begins on ${startDate} and continues for ${termMonths} month(s), unless terminated earlier as provided below.

3. Revenue, Commission & Reporting
${
  commissionEnabled
    ? `The Operator will pay the Location a commission of ${commissionRate} of gross sales.
Payout schedule: ${safe(formData.payoutSchedule, '[Payout Schedule]')}. Payments are due within ${safe(formData.payoutDueDays, '[Due Days]')} days after the end of the reporting period.
Reporting frequency: ${safe(formData.reportingFrequency, '[Reporting Frequency]')}.
Late fee: ${safe(formData.lateFee, '[Late Fee]')}.`
    : 'No commission is due to the Location for vending sales under this Agreement.'
}

4. Product Selection & Pricing
${safe(formData.pricingControl, '[Pricing Control]')}. The Operator may rotate products to meet demand and comply with applicable regulations.

5. Service, Restocking & Access
The Operator will service and restock machines on a ${safe(formData.restockFrequency, '[Restock Frequency]')} basis.
Service availability hours: ${safe(formData.serviceHours, '[Service Hours]')}.
Access requirements: ${safe(formData.accessRequirements, '[Access Requirements]')}.
Utilities: Location will provide access to electricity and reasonable space for the equipment: ${safe(formData.electricityProvided, '[Utilities Provided]')}.

6. Responsibilities & Compliance
Operator Responsibilities:
- Maintain, service, and restock the equipment.
- Ensure products meet quality standards and are appropriately priced.
- Carry required insurance coverage for operations and provide proof upon request.
- Comply with all federal, state, and local laws and health requirements.

Location Responsibilities:
- Provide reasonable access to the placement area for service and restocking.
- Allow the Operator to place promotional signage if needed.
- Protect the equipment from tampering and notify the Operator of issues promptly.

7. Ownership, Damage & Liability
All equipment remains the property of the Operator. ${safe(formData.damageResponsibility, '[Damage Responsibility]')}.
Insurance: ${safe(formData.insuranceCoverage, '[Insurance Coverage]')}. Coverage limit: ${safe(formData.liabilityLimit, '[Liability Limit]')}.
Neither party shall be liable for indirect or consequential damages.

8. Relocation
If the Location requires relocation of the machine(s), the Location will provide at least ${safe(formData.relocationNoticeDays, '[Relocation Notice Days]')} days' notice and a comparable placement area.

9. Termination
Either party may terminate this Agreement with ${cancellationNoticeDays} days' written notice.
Upon termination, the Operator will remove all equipment within a reasonable time.
Termination for cause may be immediate if a material breach is not cured within 10 days of written notice.

10. General Terms
This Agreement is governed by the laws of ${governingState}.
This document represents the entire agreement between the parties and may be amended in writing.
Assignment: Neither party may assign this Agreement without written consent.
Severability: If any provision is held invalid, the remainder remains in effect.
Force Majeure: Neither party is liable for delays caused by events beyond reasonable control.
${
  additionalTerms
    ? `\n11. Additional Terms\n${additionalTerms}\n`
    : ''
}

Operator Signature: ____________________________   Date: ____________
Location Signature: ____________________________   Date: ____________`
  }, [formData])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractText)
      setCopyStatus('copied')
      setTimeout(() => setCopyStatus('idle'), 2000)
    } catch (error) {
      setCopyStatus('error')
    }
  }

  const handleDownload = () => {
    try {
      setDownloadStatus('idle')
      const blob = new Blob([contractText], { type: 'text/plain;charset=utf-8' })
      const fileName = 'vending-machine-placement-agreement.txt'
      // @ts-expect-error - legacy IE fallback
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // @ts-expect-error - legacy IE fallback
        window.navigator.msSaveOrOpenBlob(blob, fileName)
        return
      }

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch (error) {
      setDownloadStatus('error')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xpqjawdn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'vending-machine-business-contract',
          operatorName: formData.operatorName,
          operatorCompany: formData.operatorCompany,
          operatorEmail: formData.operatorEmail,
          operatorPhone: formData.operatorPhone,
          locationBusinessName: formData.locationBusinessName,
          locationContactName: formData.locationContactName,
          locationAddress: formData.locationAddress,
          machineType: formData.machineType,
          machineQuantity: formData.machineQuantity,
          products: formData.products,
          commissionEnabled: formData.commissionEnabled,
          commissionRate: formData.commissionRate,
          payoutSchedule: formData.payoutSchedule,
          payoutDueDays: formData.payoutDueDays,
          termMonths: formData.termMonths,
          placementArea: formData.placementArea,
          restockFrequency: formData.restockFrequency,
          serviceHours: formData.serviceHours,
          cancellationNoticeDays: formData.cancellationNoticeDays,
          exclusivity: formData.exclusivity,
          electricityProvided: formData.electricityProvided,
          insuranceCoverage: formData.insuranceCoverage,
          liabilityLimit: formData.liabilityLimit,
          damageResponsibility: formData.damageResponsibility,
          relocationNoticeDays: formData.relocationNoticeDays,
          lateFee: formData.lateFee,
          pricingControl: formData.pricingControl,
          reportingFrequency: formData.reportingFrequency,
          accessRequirements: formData.accessRequirements,
          governingState: formData.governingState,
          additionalTerms: formData.additionalTerms,
          _subject: 'Vending Machine Business Contract - New Submission'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setIsUnlocked(true)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  const handlePrint = () => {
    const printWindow = window.open('', '_blank', 'width=900,height=700')
    if (!printWindow) {
      window.print()
      return
    }

    const escapedText = contractText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    printWindow.document.write(`<!doctype html>
<html>
  <head>
    <title>Vending Machine Placement Agreement</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 32px; color: #111827; }
      pre { white-space: pre-wrap; font-size: 13px; line-height: 1.6; }
    </style>
  </head>
  <body>
    <pre>${escapedText}</pre>
  </body>
</html>`)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl">
              Vending Machine Business Contract
            </h1>
            <p className="mt-4 text-lg text-chocolate/70">
              Fill out the details below to generate a ready-to-use vending machine placement
              agreement for your business.
            </p>
            <p className="mt-3 text-sm text-chocolate/60">
              This template is for informational purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="card">
              <h2 className="text-2xl font-playfair font-bold text-chocolate mb-6">
                Contract Details
              </h2>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <h3 className="text-lg font-semibold text-chocolate mb-4">Operator Info</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="operatorName">
                        Operator Name
                      </label>
                      <input
                        id="operatorName"
                        name="operatorName"
                        value={formData.operatorName}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="operatorCompany">
                        Company Name
                      </label>
                      <input
                        id="operatorCompany"
                        name="operatorCompany"
                        value={formData.operatorCompany}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="operatorEmail">
                        Email
                      </label>
                      <input
                        id="operatorEmail"
                        name="operatorEmail"
                        value={formData.operatorEmail}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="operatorPhone">
                        Phone
                      </label>
                      <input
                        id="operatorPhone"
                        name="operatorPhone"
                        value={formData.operatorPhone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="tel"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="operatorAddress">
                        Address
                      </label>
                      <input
                        id="operatorAddress"
                        name="operatorAddress"
                        value={formData.operatorAddress}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-chocolate mb-4">Location Info</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="locationBusinessName">
                        Business Name
                      </label>
                      <input
                        id="locationBusinessName"
                        name="locationBusinessName"
                        value={formData.locationBusinessName}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="locationContactName">
                        Contact Name
                      </label>
                      <input
                        id="locationContactName"
                        name="locationContactName"
                        value={formData.locationContactName}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="locationAddress">
                        Location Address
                      </label>
                      <input
                        id="locationAddress"
                        name="locationAddress"
                        value={formData.locationAddress}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-chocolate mb-4">Machine & Terms</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="machineType">
                        Machine Type
                      </label>
                      <input
                        id="machineType"
                        name="machineType"
                        value={formData.machineType}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="Snack, drink, combo, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="machineQuantity">
                        Machine Quantity
                      </label>
                      <input
                        id="machineQuantity"
                        name="machineQuantity"
                        value={formData.machineQuantity}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="number"
                        min="1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="products">
                        Products Offered
                      </label>
                      <input
                        id="products"
                        name="products"
                        value={formData.products}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="Snacks, beverages, healthy options"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="placementArea">
                        Placement Area
                      </label>
                      <input
                        id="placementArea"
                        name="placementArea"
                        value={formData.placementArea}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="Break room, lobby, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="commissionEnabled">
                        Commission Required?
                      </label>
                      <select
                        id="commissionEnabled"
                        name="commissionEnabled"
                        value={formData.commissionEnabled}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                      >
                        <option value="No">No commission</option>
                        <option value="Yes">Yes, commission applies</option>
                      </select>
                    </div>
                    {formData.commissionEnabled === 'Yes' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="commissionRate">
                            Commission Rate
                          </label>
                          <input
                            id="commissionRate"
                            name="commissionRate"
                            value={formData.commissionRate}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                            type="text"
                            placeholder="15% of gross sales"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="payoutSchedule">
                            Payout Schedule
                          </label>
                          <input
                            id="payoutSchedule"
                            name="payoutSchedule"
                            value={formData.payoutSchedule}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                            type="text"
                            placeholder="Monthly, weekly, or by invoice"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="payoutDueDays">
                            Payment Due (Days)
                          </label>
                          <input
                            id="payoutDueDays"
                            name="payoutDueDays"
                            value={formData.payoutDueDays}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                            type="number"
                            min="1"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="reportingFrequency">
                            Reporting Frequency
                          </label>
                          <input
                            id="reportingFrequency"
                            name="reportingFrequency"
                            value={formData.reportingFrequency}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                            type="text"
                            placeholder="Monthly"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="lateFee">
                            Late Fee
                          </label>
                          <input
                            id="lateFee"
                            name="lateFee"
                            value={formData.lateFee}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                            type="text"
                            placeholder="1.5% per month on overdue balances"
                          />
                        </div>
                      </>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="startDate">
                        Start Date
                      </label>
                      <input
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="date"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="termMonths">
                        Term (Months)
                      </label>
                      <input
                        id="termMonths"
                        name="termMonths"
                        value={formData.termMonths}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="number"
                        min="1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="exclusivity">
                        Exclusivity
                      </label>
                      <select
                        id="exclusivity"
                        name="exclusivity"
                        value={formData.exclusivity}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                      >
                        <option value="Non-exclusive">Non-exclusive</option>
                        <option value="Exclusive for vending machines">Exclusive for vending machines</option>
                        <option value="Exclusive for snacks and drinks">Exclusive for snacks and drinks</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="pricingControl">
                        Pricing & Product Control
                      </label>
                      <input
                        id="pricingControl"
                        name="pricingControl"
                        value={formData.pricingControl}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="Operator controls product selection and pricing"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="restockFrequency">
                        Restock Frequency
                      </label>
                      <input
                        id="restockFrequency"
                        name="restockFrequency"
                        value={formData.restockFrequency}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="Weekly"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="serviceHours">
                        Service Hours
                      </label>
                      <input
                        id="serviceHours"
                        name="serviceHours"
                        value={formData.serviceHours}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="9:00 AM - 5:00 PM"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="accessRequirements">
                        Access Requirements
                      </label>
                      <input
                        id="accessRequirements"
                        name="accessRequirements"
                        value={formData.accessRequirements}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="Location provides access during business hours"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="electricityProvided">
                        Utilities Provided
                      </label>
                      <select
                        id="electricityProvided"
                        name="electricityProvided"
                        value={formData.electricityProvided}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Yes, with location approval">Yes, with location approval</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="relocationNoticeDays">
                        Relocation Notice (Days)
                      </label>
                      <input
                        id="relocationNoticeDays"
                        name="relocationNoticeDays"
                        value={formData.relocationNoticeDays}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="number"
                        min="1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="cancellationNoticeDays">
                        Cancellation Notice (Days)
                      </label>
                      <input
                        id="cancellationNoticeDays"
                        name="cancellationNoticeDays"
                        value={formData.cancellationNoticeDays}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="number"
                        min="1"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="insuranceCoverage">
                        Insurance Coverage
                      </label>
                      <input
                        id="insuranceCoverage"
                        name="insuranceCoverage"
                        value={formData.insuranceCoverage}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="General liability coverage carried by Operator"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="liabilityLimit">
                        Liability Limit
                      </label>
                      <input
                        id="liabilityLimit"
                        name="liabilityLimit"
                        value={formData.liabilityLimit}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="$1,000,000 per occurrence"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="damageResponsibility">
                        Damage Responsibility
                      </label>
                      <input
                        id="damageResponsibility"
                        name="damageResponsibility"
                        value={formData.damageResponsibility}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="Location responsible for damage caused by employees or guests"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="governingState">
                        Governing State
                      </label>
                      <input
                        id="governingState"
                        name="governingState"
                        value={formData.governingState}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        type="text"
                        placeholder="State name"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-chocolate mb-2" htmlFor="additionalTerms">
                        Additional Terms (Optional)
                      </label>
                      <textarea
                        id="additionalTerms"
                        name="additionalTerms"
                        value={formData.additionalTerms}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-coral focus:outline-none focus:ring-coral"
                        rows={4}
                        placeholder="Add custom clauses, requirements, or notes..."
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-coral/20 bg-white/60 p-6">
                  <h3 className="text-lg font-semibold text-chocolate mb-2">
                    Unlock Contract Actions
                  </h3>
                  <p className="text-sm text-chocolate/70 mb-4">
                    Submit your email to unlock copy, download, and print.
                  </p>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? 'Submitting...' : 'Unlock Contract'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="mt-3 text-sm text-green-700">
                      Thanks! Your contract actions are now unlocked.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="mt-3 text-sm text-red-600">
                      Submission failed. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-playfair font-bold text-chocolate">
                    Contract Preview
                  </h2>
                  {!isUnlocked && (
                    <span className="text-sm text-chocolate/70">
                      Unlock to enable copy, print, and download.
                    </span>
                  )}
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="btn-secondary"
                      disabled={!isUnlocked}
                    >
                      {copyStatus === 'copied' ? 'Copied!' : 'Copy Text'}
                    </button>
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="btn-secondary"
                      disabled={!isUnlocked}
                    >
                      Print
                    </button>
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="btn-primary"
                      disabled={!isUnlocked}
                    >
                      Download
                    </button>
                  </div>
                </div>
                {copyStatus === 'error' && (
                  <p className="mt-3 text-sm text-red-600">
                    Copy failed. Please select the text manually.
                  </p>
                )}
                {downloadStatus === 'error' && (
                  <p className="mt-3 text-sm text-red-600">
                    Download failed. Please use Copy Text instead.
                  </p>
                )}
                <pre className="mt-6 whitespace-pre-wrap rounded-lg bg-white/70 p-4 text-sm text-chocolate/80 shadow-inner">
                  {contractText}
                </pre>
              </div>

              <div className="rounded-2xl border border-coral/20 bg-white/60 p-6">
                <h3 className="text-lg font-semibold text-chocolate mb-3">Need edits?</h3>
                <p className="text-sm text-chocolate/70">
                  You can customize this contract anytime by updating the fields. For state-specific
                  requirements, consider reviewing with a legal professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
