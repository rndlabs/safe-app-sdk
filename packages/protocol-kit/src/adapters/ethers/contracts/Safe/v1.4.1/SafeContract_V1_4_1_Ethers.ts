import {
  EthersTransactionOptions,
  EthersTransactionResult
} from '../../../../../adapters/ethers/types.js'
import { toTxResult } from '../../../../../adapters/ethers/utils/index.js'
import {
  EMPTY_DATA,
  SENTINEL_ADDRESS,
  ZERO_ADDRESS
} from '../../../../../adapters/ethers/utils/constants.js'
import { Safe } from '../../../../../../typechain/src/ethers-v5/v1.4.1/Safe.js'
import { SafeSetupConfig } from '@rndlabs/safe-core-sdk-types'
import SafeContractEthers from '../SafeContractEthers.js'

class SafeContract_V1_4_1_Ethers extends SafeContractEthers {
  constructor(public contract: Safe) {
    super(contract)
  }

  async setup(
    setupConfig: SafeSetupConfig,
    options?: EthersTransactionOptions
  ): Promise<EthersTransactionResult> {
    const {
      owners,
      threshold,
      to = ZERO_ADDRESS,
      data = EMPTY_DATA,
      fallbackHandler = ZERO_ADDRESS,
      paymentToken = ZERO_ADDRESS,
      payment = 0,
      paymentReceiver = ZERO_ADDRESS
    } = setupConfig

    if (options && !options.gasLimit) {
      options.gasLimit = await this.estimateGas(
        'setup',
        [owners, threshold, to, data, fallbackHandler, paymentToken, payment, paymentReceiver],
        {
          ...options
        }
      )
    }
    const txResponse = await this.contract.setup(
      owners,
      threshold,
      to,
      data,
      fallbackHandler,
      paymentToken,
      payment,
      paymentReceiver,
      options
    )

    return toTxResult(txResponse, options)
  }

  async getModules(): Promise<string[]> {
    const { array } = await this.contract.getModulesPaginated(SENTINEL_ADDRESS, 10)
    return array
  }

  async isModuleEnabled(moduleAddress: string): Promise<boolean> {
    return this.contract.isModuleEnabled(moduleAddress)
  }
}

export default SafeContract_V1_4_1_Ethers
