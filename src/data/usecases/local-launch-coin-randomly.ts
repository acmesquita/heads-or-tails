import { LaunchCoinRandomly } from '@/domain/usecases'
import { Result } from '@/domain/models'

export class LocalLaunchCoinRandomly implements LaunchCoinRandomly {
  launch (): Result {
    const random_fifty_per_cent = Math.random() < 0.5
    return random_fifty_per_cent ? Result.Heads : Result.Tails
  }
}
