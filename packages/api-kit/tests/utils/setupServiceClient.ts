import { getDefaultProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { EthAdapter } from '@rndlabs/safe-core-sdk-types'
import SafeApiKit from '../../src/index.js'
import config from '../utils/config.js'
import { getEthAdapter } from '../utils/setupEthAdapter'

interface ServiceClientConfig {
  safeApiKit: SafeApiKit
  ethAdapter: EthAdapter
  signer: Wallet
}

export async function getServiceClient(signerPk: string): Promise<ServiceClientConfig> {
  const provider = getDefaultProvider(config.JSON_RPC)
  const signer = new Wallet(signerPk, provider)
  const ethAdapter = await getEthAdapter(signer)
  const safeApiKit = new SafeApiKit({ txServiceUrl: config.BASE_URL, ethAdapter })
  return { safeApiKit, ethAdapter, signer }
}
