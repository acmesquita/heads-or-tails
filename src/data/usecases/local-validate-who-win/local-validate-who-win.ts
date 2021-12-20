import { InvalidParamsError } from '@/domain/errors'
import { Player } from '@/domain/models'

export class LocalValidateWhoWin {
  validate (player1: Player, player2: Player): void {
    if (!player1 || !player2) {
      throw new InvalidParamsError()
    }
  }
}
