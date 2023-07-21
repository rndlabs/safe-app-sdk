import { Multi_send as MultiSend } from '../../../../../../typechain/src/ethers-v5/v1.4.1/Multi_send.js'
import MultiSendEthersContract from '../MultiSendEthersContract.js'

class MultiSendContract_V1_4_1_Ethers extends MultiSendEthersContract {
  constructor(public contract: MultiSend) {
    super(contract)
  }
}

export default MultiSendContract_V1_4_1_Ethers
