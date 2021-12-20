import { InvalidParamsError } from '@/domain/errors'
import { LocalValidateWhoWin } from './local-validate-who-win'

describe('LocalValidateWhoWin', () => {
  test('Should throws if player1 not is provider', () => {
    const sut = new LocalValidateWhoWin()

    expect(() => sut.validate(null)).toThrowError(new InvalidParamsError())
  })
})
