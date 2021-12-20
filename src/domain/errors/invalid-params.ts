export class InvalidParamsError extends Error {
  constructor () {
    super('Parâmetro inválido')
    this.name = 'InvalidParamsError'
  }
}
