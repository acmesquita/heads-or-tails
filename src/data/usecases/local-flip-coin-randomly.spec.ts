import { Result } from '@/domain/models'
import { LocalFlipCoinRandomly } from './local-flip-coin-randomly'

describe('LocalFlipCoinRandomly', () => {
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  test('Should return heads if random number less than 0.5', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.49)

    const sut = new LocalFlipCoinRandomly()
    const result = sut.flip()

    expect((result)).toBe(Result.Heads)
  })

  test('Should return tails if random number greater than 0.5', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.6)

    const sut = new LocalFlipCoinRandomly()
    const result = sut.flip()

    expect((result)).toBe(Result.Tails)
  })

  test('Should return tails if random number equal than 0.5', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5)

    const sut = new LocalFlipCoinRandomly()
    const result = sut.flip()

    expect((result)).toBe(Result.Tails)
  })
})
