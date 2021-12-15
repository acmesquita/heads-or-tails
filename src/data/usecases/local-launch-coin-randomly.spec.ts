import { LaunchCoinRandomly } from '@/domain/usecases'
import { Result } from '@/domain/models'

class LocalLaunchCoinRandomly implements LaunchCoinRandomly {
  launch (): Result {
    const random_fifty_per_cent = Math.random() < 0.5
    return random_fifty_per_cent ? Result.Heads : Result.Tails
  }
}

describe('LocalLaunchCoinRandomly', () => {
  test('Should be return heads or tails when call launch method', () => {
    const sut = new LocalLaunchCoinRandomly()
    const result = sut.launch()

    expect(Result[result]).toBeTruthy()
  })
})
