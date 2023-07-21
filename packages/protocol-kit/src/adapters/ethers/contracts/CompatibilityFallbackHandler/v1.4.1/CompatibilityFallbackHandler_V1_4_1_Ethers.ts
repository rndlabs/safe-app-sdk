import { Compatibility_fallback_handler as CompatibilityFallbackHandler } from '../../../../../../typechain/src/ethers-v5/v1.4.1/Compatibility_fallback_handler.js'
import CompatibilityFallbackHandlerEthersContract from '../CompatibilityFallbackHandlerEthersContract.js'

class CompatibilityFallbackHandler_V1_4_1_Ethers extends CompatibilityFallbackHandlerEthersContract {
  constructor(public contract: CompatibilityFallbackHandler) {
    super(contract)
  }
}

export default CompatibilityFallbackHandler_V1_4_1_Ethers
