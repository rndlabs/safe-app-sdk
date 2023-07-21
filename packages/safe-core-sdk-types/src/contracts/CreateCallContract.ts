import { TransactionOptions, TransactionResult } from '../types.js'

export interface CreateCallContract {
  getAddress(): string
  performCreate2(
    value: string,
    deploymentData: string,
    salt: string,
    options?: TransactionOptions
  ): Promise<TransactionResult>
  performCreate(
    value: string,
    deploymentData: string,
    options?: TransactionOptions
  ): Promise<TransactionResult>
  encode(methodName: any, params: any): string
  estimateGas(methodName: string, params: any[], options: TransactionOptions): Promise<string>
}
