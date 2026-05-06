/**
 * Cookie / analytics consent for the marketing site (Next.js).
 * Mirrors blk-frontend `cookieConsent` so behavior is consistent across properties.
 */

export const COOKIE_CONSENT_STORAGE_KEY = 'blk-cookie-consent-v1'

export type CookieConsentV1 = {
  version: 1
  analytics: boolean
  updatedAt: string
}

const DEFAULT_ANALYTICS_ID = '46377265-1160-4312-95bc-a12dc9495347'

let analyticsScriptInjected = false

export function readCookieConsent(): CookieConsentV1 | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<CookieConsentV1>
    if (parsed.version !== 1 || typeof parsed.analytics !== 'boolean' || typeof parsed.updatedAt !== 'string') {
      return null
    }
    return parsed as CookieConsentV1
  } catch {
    return null
  }
}

export function hasRecordedCookieChoice(): boolean {
  return readCookieConsent() !== null
}

export function saveCookieConsent(analytics: boolean): CookieConsentV1 {
  const value: CookieConsentV1 = {
    version: 1,
    analytics,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(value))
  return value
}

export function injectAnalyticsIfConsented(): void {
  if (typeof document === 'undefined') return
  if (analyticsScriptInjected) return
  const consent = readCookieConsent()
  if (!consent?.analytics) return

  const websiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID || DEFAULT_ANALYTICS_ID
  if (!websiteId) return

  const existing = document.querySelector('script[data-blk-analytics]')
  if (existing) {
    analyticsScriptInjected = true
    return
  }

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://analytics.blktaxservices.com/script.js'
  script.setAttribute('data-website-id', websiteId)
  script.setAttribute('data-blk-analytics', '1')
  document.head.appendChild(script)
  analyticsScriptInjected = true
}
