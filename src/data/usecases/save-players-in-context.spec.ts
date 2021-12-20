import { InvalidParamsError } from '@/domain/errors'
import { Player, Result } from '@/domain/models'
import { SaveContext } from '../protocols/save-context'
import { SavePlayersInContext } from './save-players-in-context'

class ContextSpy implements SaveContext {
  player1?: Player
  player2?: Player
  save (params: any): void {
    this.player1 = params.player1
    this.player2 = params.player2
  }
}

describe('SavePlayersInContext', () => {
  test('Should throws InvalidParamsError if invalid params are provider', () => {
    const sut = new SavePlayersInContext(null)
    expect(sut.save).toThrowError(new InvalidParamsError())
  })

  test('Should save correctly values', () => {
    const contextSpy = new ContextSpy()
    const sut = new SavePlayersInContext(contextSpy)
    const player1: Player = {
      name: 'any_name',
      coinFace: Result.Heads
    }
    const player2: Player = {
      name: 'any_name',
      coinFace: Result.Tails
    }

    sut.save({ player1, player2 })

    expect(contextSpy.player1).toEqual(player1)
    expect(contextSpy.player2).toEqual(player2)
  })
})
