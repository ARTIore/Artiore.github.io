import type { ComponentType } from 'react'
import { globalInjusticeHub, globalInjusticePages } from './catalog'

type Loader = () => Promise<{ default: ComponentType }>

export function globalInjusticeRouteLoaders(): Record<string, Loader> {
  const loaders: Record<string, Loader> = {
    [globalInjusticeHub.path]: () => import('../../pages/GlobalInjusticeHubPage'),
  }
  for (const page of globalInjusticePages) {
    const id = page.id
    loaders[page.path] = async () => {
      const view = await import('../../pages/GlobalInjusticeDossierPage')
      function Page() {
        return <view.default id={id} />
      }
      return { default: Page }
    }
  }
  return loaders
}
