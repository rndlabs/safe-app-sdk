import {
  EthersTransactionOptions,
  EthersTransactionResult
} from '@rndlabs/safe-protocol-kit/adapters/ethers/types'
import { sameString, toTxResult } from '@rndlabs/safe-protocol-kit/adapters/ethers/utils'
import {
  EMPTY_DATA,
  ZERO_ADDRESS
} from '@rndlabs/safe-protocol-kit/adapters/ethers/utils/constants'
import { Gnosis_safe as Safe } from '@rndlabs/safe-protocol-kit/typechain/src/ethers-v5/v1.0.0/Gnosis_safe'
import { SafeSetupConfig } from '@rndlabs/safe-core-sdk-types'
import SafeContractEthers from '../SafeContractEthers'

class SafeContract_V1_0_0_Ethers extends SafeContractEthers {
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
      paymentToken = ZERO_ADDRESS,
      payment = 0,
      paymentReceiver = ZERO_ADDRESS
    } = setupConfig

    if (options && !options.gasLimit) {
      options.gasLimit = await this.estimateGas(
        'setup',
        [owners, threshold, to, data, paymentToken, payment, paymentReceiver],
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
      paymentToken,
      payment,
      paymentReceiver,
      options
    )

    return toTxResult(txResponse, options)
  }

  async getModules(): Promise<string[]> {
    return this.contract.getModules()
  }

  async isModuleEnabled(moduleAddress: string): Promise<boolean> {
    const modules = await this.getModules()
    const isModuleEnabled = modules.some((enabledModuleAddress: string) =>
      sameString(enabledModuleAddress, moduleAddress)
    )
    return isModuleEnabled
  }
}

export default SafeContract_V1_0_0_Ethers
