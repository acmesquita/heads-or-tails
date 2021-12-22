import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Register from '.'

describe('Register Page', () => {
  test('Should start with initial state', () => {
    render(<Register />)

    expect(screen.getByTestId('register').childElementCount).toBe(2)
    expect(screen.getByTestId('form').childElementCount).toBe(2)
    expect(screen.getByTestId('player1').childElementCount).toBe(3)
    expect(screen.getByTestId('player2').childElementCount).toBe(3)
  })
})
