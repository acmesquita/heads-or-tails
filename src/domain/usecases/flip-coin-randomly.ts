import { Result } from '@/domain/models'

export interface FlipCoinRandomly {
  flip(): Result
}
