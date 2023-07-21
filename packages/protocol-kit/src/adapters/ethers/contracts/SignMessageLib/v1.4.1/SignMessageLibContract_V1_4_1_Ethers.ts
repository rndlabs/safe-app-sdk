import { Sign_message_lib as SignMessageLib } from '../../../../../../typechain/src/ethers-v5/v1.4.1/Sign_message_lib.js'
import SignMessageLibEthersContract from '../SignMessageLibEthersContract.js'

class SignMessageLibContract_V1_4_1_Ethers extends SignMessageLibEthersContract {
  constructor(public contract: SignMessageLib) {
    super(contract)
  }
}

export default SignMessageLibContract_V1_4_1_Ethers
