import { Result, Player } from '@/domain/models'

export interface ValidateWhoWin {
  validate(player1: Player, player2: Player, faceResult: Result): Player
}
