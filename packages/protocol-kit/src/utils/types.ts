import { SafeConfig, SafeConfigWithPredictedSafe } from '../types/index.js'

export function isSafeConfigWithPredictedSafe(
  config: SafeConfig
): config is SafeConfigWithPredictedSafe {
  return (config as unknown as SafeConfigWithPredictedSafe).predictedSafe !== undefined
}
