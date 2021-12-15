import { Result } from '@/domain/models'
import { LocalLaunchCoinRandomly } from './local-launch-coin-randomly'

describe('LocalLaunchCoinRandomly', () => {
  test('Should be return heads or tails when call launch method', () => {
    const sut = new LocalLaunchCoinRandomly()
    const result = sut.launch()

    expect([Result.Heads, Result.Tails].includes(result)).toBeTruthy()
  })
})
