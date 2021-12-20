import { InvalidParamsError } from '@/domain/errors'
import { SavePlayers } from '@/domain/usecases'

export class SavePlayersInContext implements SavePlayers {
  save (params: SavePlayers.Param): void {
    if (!params) {
      throw new InvalidParamsError()
    }
  }
}
