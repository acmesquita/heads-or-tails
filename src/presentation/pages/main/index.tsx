import React, { useEffect, useState } from 'react'
import styles from './styles.scss'
import tails from '@/presentation/assets/brasao.png'
import heads from '@/presentation/assets/busto.png'
import { LaunchCoinRandomly } from '@/domain/usecases'
import { Result } from '@/domain/models'

type Params = {
  launchCoinRandomly: LaunchCoinRandomly
}

const Main: React.FC<Params> = ({ launchCoinRandomly }: Params) => {
  const [face, setFace] = useState('')

  useEffect(() => {
    setFace(
      launchCoinRandomly.launch()
    )
  }, [])

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.coin}>
        <img src={face === Result.Heads ? heads : tails } alt="" data-testid="img" data-value={face} />
      </div>
    </div>
  )
}

export default Main
