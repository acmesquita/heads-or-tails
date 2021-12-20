import { InvalidParamsError } from '@/domain/errors'
import { SavePlayersInContext } from './save-players-in-context'

describe('SavePlayersInContext', () => {
  test('Should throws InvalidParamsError if invalid params are provider', () => {
    const sut = new SavePlayersInContext()
    expect(sut.save).toThrowError(new InvalidParamsError())
  })
})
