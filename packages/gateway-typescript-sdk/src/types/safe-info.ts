import type { AddressEx } from './common.js'

export enum ImplementationVersionState {
  UP_TO_DATE = 'UP_TO_DATE',
  OUTDATED = 'OUTDATED',
  UNKNOWN = 'UNKNOWN'
}

export type SafeInfo = {
  address: AddressEx
  chainId: string
  nonce: number
  threshold: number
  owners: AddressEx[]
  implementation: AddressEx
  implementationVersionState: ImplementationVersionState
  modules: AddressEx[] | null
  guard: AddressEx | null
  fallbackHandler: AddressEx | null
  version: string | null
  collectiblesTag: string
  txQueuedTag: string
  txHistoryTag: string
  messagesTag: string
}
