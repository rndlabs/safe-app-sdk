import { BigNumber } from '@ethersproject/bignumber'
import { CompatibilityFallbackHandlerContract } from '../contracts/CompatibilityFallbackHandlerContract.js'
import { CreateCallContract } from '../contracts/CreateCallContract.js'
import { MultiSendCallOnlyContract } from '../contracts/MultiSendCallOnlyContract.js'
import { MultiSendContract } from '../contracts/MultiSendContract.js'
import { SafeContract } from '../contracts/SafeContract.js'
import { SafeProxyFactoryContract } from '../contracts/SafeProxyFactoryContract.js'
import { SignMessageLibContract } from '../contracts/SignMessageLibContract.js'
import { SimulateTxAccessorContract } from '../contracts/SimulateTxAccessorContract.js'
import {
  Eip3770Address,
  SafeTransactionEIP712Args,
  SafeVersion
} from '../types.js'
import { SingletonDeployment } from '@safe-global/safe-deployments'

export type AbiType = 'function' | 'constructor' | 'event' | 'fallback' | 'receive'
export type StateMutabilityType = 'pure' | 'view' | 'nonpayable' | 'payable'

export interface AbiItem {
  anonymous?: boolean
  constant?: boolean
  inputs?: AbiInput[]
  name?: string
  outputs?: AbiOutput[]
  payable?: boolean
  stateMutability?: StateMutabilityType
  type: AbiType
  gas?: number
}

export interface AbiInput {
  name: string
  type: string
  indexed?: boolean
  components?: AbiInput[]
  internalType?: string
}

export interface AbiOutput {
  name: string
  type: string
  components?: AbiOutput[]
  internalType?: string
}

export interface EthAdapterTransaction {
  to: string
  from: string
  data: string
  value?: string
  gasPrice?: number | string
  gasLimit?: number | string
  maxFeePerGas?: number | string
  maxPriorityFeePerGas?: number | string
}

export interface GetContractProps {
  safeVersion: SafeVersion
  singletonDeployment?: SingletonDeployment
  customContractAddress?: string
  customContractAbi?: AbiItem | AbiItem[]
}

export interface EthAdapter {
  isAddress(address: string): boolean
  getEip3770Address(fullAddress: string): Promise<Eip3770Address>
  getBalance(address: string, defaultBlock?: string | number): Promise<BigNumber>
  getNonce(address: string, defaultBlock?: string | number): Promise<number>
  getChainId(): Promise<number>
  getChecksummedAddress(address: string): string
  getSafeContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SafeContract>
  getMultiSendContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<MultiSendContract>
  getMultiSendCallOnlyContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<MultiSendCallOnlyContract>
  getCompatibilityFallbackHandlerContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<CompatibilityFallbackHandlerContract>
  getSafeProxyFactoryContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SafeProxyFactoryContract>
  getSignMessageLibContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SignMessageLibContract>
  getCreateCallContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<CreateCallContract>
  getSimulateTxAccessorContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SimulateTxAccessorContract>
  getContractCode(address: string, defaultBlock?: string | number): Promise<string>
  isContractDeployed(address: string, defaultBlock?: string | number): Promise<boolean>
  getStorageAt(address: string, position: string): Promise<string>
  getTransaction(transactionHash: string): Promise<any>
  getSignerAddress(): Promise<string | undefined>
  signMessage(message: string): Promise<string>
  signTypedData(
    safeTransactionEIP712Args: SafeTransactionEIP712Args,
    signTypedDataVersion?: string
  ): Promise<string>
  estimateGas(
    transaction: EthAdapterTransaction,
    callback?: (error: Error, gas: number) => void
  ): Promise<string>
  call(transaction: EthAdapterTransaction, defaultBlock?: string | number): Promise<string>
  encodeParameters(types: string[], values: any[]): string
  decodeParameters(types: any[], values: string): { [key: string]: any }
}
