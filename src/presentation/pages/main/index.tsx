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
  const [show, setShow] = useState(false)

  useEffect(() => {
    setFace(
      launchCoinRandomly.launch()
    )
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2100)
  }, [])

  function flipCoin (): void {
    setFace(
      launchCoinRandomly.launch()
    )
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.coin}>
        <img
          src={face === Result.Heads ? heads : tails }
          className={show ? styles.show : styles.hide}
          data-value={face}
          alt="coin"
          data-testid="img"
        />
      </div>
      <button className={styles.btnFlip} title='Retry' onClick={flipCoin} data-testid="btn-retry"></button>
    </div>
  )
}

export default Main
