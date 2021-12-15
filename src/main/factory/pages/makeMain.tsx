import React from 'react'
import { Main } from '@/presentation/pages'
import { LocalLaunchCoinRandomly } from '@/data/usecases'

export const makeMain: React.FC = () => {
  const localLaunchCoinRandomly = new LocalLaunchCoinRandomly()
  return (
    <Main launchCoinRandomly={localLaunchCoinRandomly}/>
  )
}
