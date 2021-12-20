import { InvalidParamsError } from '@/domain/errors'
import { Player, Result } from '@/domain/models'
import { LocalValidateWhoWin } from './local-validate-who-win'

describe('LocalValidateWhoWin', () => {
  test('Should throws InvalidParamsError if player1 not is provider', () => {
    const sut = new LocalValidateWhoWin()

    expect(() => sut.validate(null, null)).toThrowError(new InvalidParamsError())
  })

  test('Should throws InvalidParamsError if player2 not is provider', () => {
    const sut = new LocalValidateWhoWin()
    const player1: Player = {
      name: 'any_name',
      coinFace: Result.Heads
    }

    expect(() => sut.validate(player1, null)).toThrowError(new InvalidParamsError())
  })
})
