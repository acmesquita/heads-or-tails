import React from 'react'
import { Main } from '@/presentation/pages'
import { LocalFlipCoinRandomly } from '@/data/usecases'

export const MakeMain: React.FC = () => {
  const localFlipCoinRandomly = new LocalFlipCoinRandomly()
  return (
    <Main flipCoinRandomly={localFlipCoinRandomly}/>
  )
}
