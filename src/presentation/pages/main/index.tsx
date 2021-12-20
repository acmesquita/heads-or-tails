import React, { useEffect, useState } from 'react'
import styles from './styles.scss'
import tails from '@/presentation/assets/brasao.png'
import heads from '@/presentation/assets/busto.png'
import { FlipCoinRandomly } from '@/domain/usecases'
import { Result } from '@/domain/models'

type Params = {
  flipCoinRandomly: FlipCoinRandomly
}

const Main: React.FC<Params> = ({ flipCoinRandomly }: Params) => {
  const [face, setFace] = useState('')
  const [show, setShow] = useState(false)
  const [classAnitmate, setClassAnitmate] = useState('')

  useEffect(() => {
    flipCoin()
  }, [])

  function flipCoin (): void {
    setShow(false)
    setTimeout(() => {
      setFace(flipCoinRandomly.flip())
      setClassAnitmate(styles.animation)
      setTimeout(() => {
        setShow(true)
        setClassAnitmate('')
      }, 2100)
    }, 200)
  }

  return (
    <div className={styles.mainWrapper} data-testid="main">
      <div className={`${styles.coin} ${classAnitmate}`} data-testid="coin">
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
