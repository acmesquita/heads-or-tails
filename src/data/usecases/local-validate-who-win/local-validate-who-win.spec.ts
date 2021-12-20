import { InvalidParamsError } from '@/domain/errors'
import { Player, Result } from '@/domain/models'
import { LocalValidateWhoWin } from './local-validate-who-win'

const makeSut = (): LocalValidateWhoWin => {
  return new LocalValidateWhoWin()
}

describe('LocalValidateWhoWin', () => {
  test('Should throws InvalidParamsError if player1 not is provider', () => {
    const sut = makeSut()

    expect(() => sut.validate(null, null, null)).toThrowError(new InvalidParamsError())
  })

  test('Should throws InvalidParamsError if player2 not is provider', () => {
    const sut = makeSut()
    const player1: Player = {
      name: 'any_name',
      coinFace: Result.Heads
    }

    expect(() => sut.validate(player1, null, null)).toThrowError(new InvalidParamsError())
  })

  test('Should throws InvalidParamsError if faceResult not is provider', () => {
    const sut = makeSut()
    const player1: Player = {
      name: 'any_name',
      coinFace: Result.Heads
    }
    const player2: Player = {
      name: 'any_name',
      coinFace: Result.Tails
    }

    expect(() => sut.validate(player1, player2, null)).toThrowError(new InvalidParamsError())
  })
})
