import type { ComponentType } from 'react'
import { investigationBase, investigationPieces } from './catalog'

type Loader = () => Promise<{ default: ComponentType }>

const rawSources = {
  '00-executive-investigation.md': () => import('./source/00-executive-investigation.md?raw'),
  '01-password-protected-wifi-not-secure.md': () => import('./source/01-password-protected-wifi-not-secure.md?raw'),
  '02-hotel-wifi-security-guide.md': () => import('./source/02-hotel-wifi-security-guide.md?raw'),
  '03-dns-hijacking-explained.md': () => import('./source/03-dns-hijacking-explained.md?raw'),
  '04-bluetooth-ble-tracking.md': () => import('./source/04-bluetooth-ble-tracking.md?raw'),
  '05-android-accessibility-service-malware.md': () => import('./source/05-android-accessibility-service-malware.md?raw'),
  '06-iphone-zero-click-spyware.md': () => import('./source/06-iphone-zero-click-spyware.md?raw'),
  '07-whatsapp-encryption-limits.md': () => import('./source/07-whatsapp-encryption-limits.md?raw'),
  '08-pegasus-predator-commercial-spyware.md': () => import('./source/08-pegasus-predator-commercial-spyware.md?raw'),
  '09-cloud-photo-account-takeover.md': () => import('./source/09-cloud-photo-account-takeover.md?raw'),
  '10-crypto-wallet-drainers.md': () => import('./source/10-crypto-wallet-drainers.md?raw'),
  '11-sim-swap-account-takeover.md': () => import('./source/11-sim-swap-account-takeover.md?raw'),
  '12-hotel-keycard-lock-security.md': () => import('./source/12-hotel-keycard-lock-security.md?raw'),
  '13-global-threat-matrix.md': () => import('./source/13-global-threat-matrix.md?raw'),
  '14-public-safety-checklist.md': () => import('./source/14-public-safety-checklist.md?raw'),
  '15-technical-glossary.md': () => import('./source/15-technical-glossary.md?raw'),
  '16-source-register.md': () => import('./source/16-source-register.md?raw'),
  'browser-extensions-session-theft.md': () => import('./source/browser-extensions-session-theft.md?raw'),
  'digital-security-warning-signs.md': () => import('./source/digital-security-warning-signs.md?raw'),
}

export function investigationRouteLoaders(): Record<string, Loader> {
  const loaders: Record<string, Loader> = {
    [investigationBase]: () => import('../../pages/InvestigationHubPage'),
  }
  for (const piece of investigationPieces) {
    const load = rawSources[piece.file as keyof typeof rawSources]
    loaders[piece.path] = async () => {
      const [view, mod] = await Promise.all([import('../../pages/InvestigationArticlePage'), load()])
      function Page() {
        return <view.default markdown={mod.default} slug={piece.slug} />
      }
      return { default: Page }
    }
  }
  return loaders
}
