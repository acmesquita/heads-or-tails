import { FlipCoinRandomly } from '@/domain/usecases'
import { Result } from '@/domain/models'

export class LocalFlipCoinRandomly implements FlipCoinRandomly {
  flip (): Result {
    const random_fifty_per_cent = Math.random() < 0.5
    return random_fifty_per_cent ? Result.Heads : Result.Tails
  }
}
