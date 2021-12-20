import { InvalidParamsError } from '@/domain/errors'
import { SavePlayers } from '@/domain/usecases'
import { SaveContext } from '@/data/protocols/save-context'

export class SavePlayersInContext implements SavePlayers {
  constructor (
    private readonly context: SaveContext
  ) {}

  save (params: SavePlayers.Param): void {
    if (!params) {
      throw new InvalidParamsError()
    }

    this.context.save(params)
  }
}
