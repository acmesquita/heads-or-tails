import { InvalidParamsError } from '@/domain/errors'
import { Player, Result } from '@/domain/models'

export class LocalValidateWhoWin {
  validate (player1: Player, player2: Player, faceResult: Result): void {
    if (!player1 || !player2 || !faceResult) {
      throw new InvalidParamsError()
    }
  }
}
