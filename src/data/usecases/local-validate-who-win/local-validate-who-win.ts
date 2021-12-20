import { InvalidParamsError } from '@/domain/errors'
import { Player, Result } from '@/domain/models'
import { ValidateWhoWin } from '@/domain/usecases'

export class LocalValidateWhoWin implements ValidateWhoWin {
  validate (player1: Player, player2: Player, faceResult: Result): Player {
    if (!player1 || !player2 || !faceResult) {
      throw new InvalidParamsError()
    }

    if (player1.coinFace === player2.coinFace) {
      throw new InvalidParamsError()
    }

    return [player1, player2].find(player => player.coinFace === faceResult)
  }
}
