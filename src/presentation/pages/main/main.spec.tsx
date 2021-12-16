import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Main from '.'
import { Result } from '@/domain/models'
import { LaunchCoinRandomly } from '@/domain/usecases'

class LaunchCoinRandomlyMock implements LaunchCoinRandomly {
  output = Result.Heads
  callsCount = 0
  launch (): Result {
    this.callsCount++
    return this.output
  }
}

type SutTypes = {
  launchCoinRandomlyMock: LaunchCoinRandomlyMock
}

const makeSut = (): SutTypes => {
  const launchCoinRandomlyMock = new LaunchCoinRandomlyMock()
  render(<Main launchCoinRandomly={launchCoinRandomlyMock}/>)

  return {
    launchCoinRandomlyMock
  }
}

describe('Main page', () => {
  test('Should be start with face defined', async () => {
    makeSut()
    await new Promise(resolve => setTimeout(resolve, 200))

    expect(screen.getByTestId('img')).toHaveAttribute('data-value', Result.Heads)
    expect(screen.getByTestId('img').className).toMatch('hide')

    await new Promise(resolve => setTimeout(resolve, 2500))

    expect(screen.getByTestId('img').className).toMatch('show')
  })

  test('Should be retry when click in button', async () => {
    const { launchCoinRandomlyMock } = makeSut()
    await new Promise(resolve => setTimeout(resolve, 200))

    expect(launchCoinRandomlyMock.callsCount).toBe(1)

    fireEvent.click(screen.getByTestId('btn-retry'))
    await new Promise(resolve => setTimeout(resolve, 200))

    waitFor(() => screen.getByTestId('img'))

    expect(launchCoinRandomlyMock.callsCount).toBe(2)
  })

  test('Should add animation class when initialize page', async () => {
    makeSut()
    await new Promise(resolve => setTimeout(resolve, 2300))

    const coin = screen.getByTestId('coin')

    expect(coin).toHaveClass('animation')
  })

  test('Should animation coin when click in retry button', async () => {
    makeSut()
    const coin = screen.getByTestId('coin')
    await new Promise(resolve => setTimeout(resolve, 3000))

    expect(coin).not.toHaveClass('animation')

    fireEvent.click(screen.getByTestId('btn-retry'))
    await new Promise(resolve => setTimeout(resolve, 2100))

    waitFor(() => screen.getByTestId('img'))

    expect(coin).toHaveClass('animation')
  }, 6000)
})
