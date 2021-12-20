import { Result } from '@/domain/models'
import { LocalFlipCoinRandomly } from './local-flip-coin-randomly'

type SutTypes = {
  sut: LocalFlipCoinRandomly
}

const makeSut = (value: number): SutTypes => {
  jest.spyOn(global.Math, 'random').mockReturnValue(value)
  return {
    sut: new LocalFlipCoinRandomly()
  }
}

describe('LocalFlipCoinRandomly', () => {
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  test('Should return heads if random number less than 0.5', () => {
    const { sut } = makeSut(0.49)
    const result = sut.flip()

    expect((result)).toBe(Result.Heads)
  })

  test('Should return tails if random number greater than 0.5', () => {
    const { sut } = makeSut(0.6)
    const result = sut.flip()

    expect((result)).toBe(Result.Tails)
  })

  test('Should return tails if random number equal than 0.5', () => {
    const { sut } = makeSut(0.5)
    const result = sut.flip()

    expect((result)).toBe(Result.Tails)
  })
})
