import { Player } from '@/domain/models'
import { SaveContext } from '@/data/protocols'

export class ContextSpy implements SaveContext {
  player1?: Player
  player2?: Player
  save (params: any): void {
    this.player1 = params.player1
    this.player2 = params.player2
  }
}
