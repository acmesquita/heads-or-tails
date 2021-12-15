import React from 'react'
import styles from './styles.scss'
import tails from '@/presentation/assets/brasao.png'
import heads from '@/presentation/assets/busto.png'

const Main: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.coin}>
        <span className={styles.heads}>
          <img src={tails} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Main
