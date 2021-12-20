import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Main from '.'
import { Result } from '@/domain/models'
import { FlipCoinRandomly } from '@/domain/usecases'

class FlipCoinRandomlyMock implements FlipCoinRandomly {
  output = Result.Heads
  callsCount = 0
  flip (): Result {
    this.callsCount++
    return this.output
  }
}

type SutTypes = {
  flipCoinRandomlyMock: FlipCoinRandomlyMock
}

const makeSut = (): SutTypes => {
  const flipCoinRandomlyMock = new FlipCoinRandomlyMock()
  render(<Main flipCoinRandomly={flipCoinRandomlyMock}/>)

  return {
    flipCoinRandomlyMock
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
    const { flipCoinRandomlyMock: launchCoinRandomlyMock } = makeSut()
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
