import { Create_call as CreateCall } from '@rndlabs/safe-protocol-kit/typechain/src/ethers-v5/v1.4.1/Create_call'
import CreateCallEthersContract from '../CreateCallEthersContract'

class CreateCallContract_V1_4_1_Ethers extends CreateCallEthersContract {
  constructor(public contract: CreateCall) {
    super(contract)
  }
}

export default CreateCallContract_V1_4_1_Ethers
