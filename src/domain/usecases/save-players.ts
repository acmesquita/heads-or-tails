import { Player } from '@/domain/models'

export interface SavePlayers {
  save(params: SavePlayers.Param): void
}

export namespace SavePlayers {
  export type Param = {
    player1: Player
    player2: Player
  }
}
