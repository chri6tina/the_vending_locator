'use client'

import { useEffect } from 'react'

type GaParams = {
  event_category?: string
  event_label?: string
}

const sendEvent = (eventName: string, params: GaParams) => {
  if (typeof window === 'undefined') return
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === 'function') {
    gtag('event', eventName, params)
  }
}

const getElementLabel = (element: HTMLElement) => {
  const explicit = element.getAttribute('data-ga-label')
  if (explicit) return explicit
  const href = element.getAttribute('href')
  if (href) return href
  const text = element.textContent?.trim()
  return text || 'unknown'
}

export default function GaEventTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const element = target?.closest?.('[data-ga-event]') as HTMLElement | null
      if (!element) return
      const eventName = element.getAttribute('data-ga-event') || 'cta_click'
      const category = element.getAttribute('data-ga-category') || 'cta'
      const label = getElementLabel(element)
      sendEvent(eventName, { event_category: category, event_label: label })
    }

    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null
      if (!form) return
      const eventName = form.getAttribute('data-ga-event')
      if (!eventName) return
      const category = form.getAttribute('data-ga-category') || 'form'
      const label = form.getAttribute('data-ga-label') || form.getAttribute('action') || 'form'
      sendEvent(eventName, { event_category: category, event_label: label })
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('submit', handleSubmit)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return null
}
