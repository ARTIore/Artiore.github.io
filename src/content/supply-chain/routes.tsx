import type { ComponentType } from 'react'
import { supplyChainPath } from './catalog'

type Loader = () => Promise<{ default: ComponentType }>

export function supplyChainRouteLoaders(): Record<string, Loader> {
  return {
    [supplyChainPath]: () => import('../../pages/SupplyChainPage'),
  }
}
