import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from '.'
import { Result } from '@/domain/models'
import { LaunchCoinRandomly } from '@/domain/usecases'

class LaunchCoinRandomlyMock implements LaunchCoinRandomly {
  output: Result

  launch (): Result {
    return this.output
  }
}

describe('Main page', () => {
  test('Should be start with face defined', () => {
    const launchCoinRandomlyMock = new LaunchCoinRandomlyMock()
    launchCoinRandomlyMock.output = Result.Heads
    render(<Main launchCoinRandomly={launchCoinRandomlyMock}/>)

    expect(screen.getByTestId('img')).toHaveAttribute('data-value', Result.Heads)
  })
})
