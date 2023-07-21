import { Proxy_factory as ProxyFactory } from '@rndlabs/safe-protocol-kit/typechain/src/ethers-v5/v1.3.0/Proxy_factory'
import SafeProxyFactoryEthersContract from '../SafeProxyFactoryEthersContract'

class SafeProxyFactoryContract_V1_3_0_Ethers extends SafeProxyFactoryEthersContract {
  constructor(public contract: ProxyFactory) {
    super(contract)
  }
}

export default SafeProxyFactoryContract_V1_3_0_Ethers
