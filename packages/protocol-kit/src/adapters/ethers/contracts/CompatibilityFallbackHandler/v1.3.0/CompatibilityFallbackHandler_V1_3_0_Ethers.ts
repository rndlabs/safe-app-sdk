import { Compatibility_fallback_handler as CompatibilityFallbackHandler } from '../../../../../../typechain/src/ethers-v5/v1.3.0/Compatibility_fallback_handler.js'
import CompatibilityFallbackHandlerEthersContract from '../CompatibilityFallbackHandlerEthersContract.js'

class CompatibilityFallbackHandler_V1_3_0_Ethers extends CompatibilityFallbackHandlerEthersContract {
  constructor(public contract: CompatibilityFallbackHandler) {
    super(contract)
  }
}

export default CompatibilityFallbackHandler_V1_3_0_Ethers
