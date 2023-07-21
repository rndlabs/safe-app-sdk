import { Multi_send_call_only as MultiSendCallOnly } from '../../../../../../typechain/src/ethers-v5/v1.4.1/Multi_send_call_only.js'
import MultiSendCallOnlyEthersContract from '../MultiSendCallOnlyEthersContract.js'

class MultiSendCallOnlyContract_V1_4_1_Ethers extends MultiSendCallOnlyEthersContract {
  constructor(public contract: MultiSendCallOnly) {
    super(contract)
  }
}

export default MultiSendCallOnlyContract_V1_4_1_Ethers
