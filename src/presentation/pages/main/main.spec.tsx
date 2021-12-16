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
  test('Should be start with face defined', () => {
    makeSut()

    expect(screen.getByTestId('img')).toHaveAttribute('data-value', Result.Heads)
    expect(screen.getByTestId('img').className).toMatch('hide')
    jest.useFakeTimers()
    jest.runAllTimers()
    setTimeout(() => {
      expect(screen.getByTestId('img').className).toMatch('show')
    }, 2100)
  })

  test('Should be retry when click in button', () => {
    const { launchCoinRandomlyMock } = makeSut()

    expect(launchCoinRandomlyMock.callsCount).toBe(1)

    fireEvent.click(screen.getByTestId('btn-retry'))
    waitFor(() => screen.getByTestId('img'))

    expect(launchCoinRandomlyMock.callsCount).toBe(2)
  })
})
