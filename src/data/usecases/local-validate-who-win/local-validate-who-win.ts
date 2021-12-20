import { InvalidParamsError } from '@/domain/errors'
import { Player } from '@/domain/models'

export class LocalValidateWhoWin {
  validate (player1: Player): void {
    if (!player1) {
      throw new InvalidParamsError()
    }
  }
}
