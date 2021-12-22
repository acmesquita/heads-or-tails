import React from 'react'
import styles from './styles.scss'

import tails from '@/presentation/assets/brasao.png'
import heads from '@/presentation/assets/busto.png'

type Params = {
  id: string
  label: string
}

const Player: React.FC<Params> = ({ id, label }: Params) => {
  return (
    <div className={styles.playerWrapper} data-testid={id}>
      <label htmlFor={`${id}`}>{label}</label>
      <input type="text" name={`${id}`} autoFocus={id === 'player1'} />
      <div className={styles.facesWrapper}>
        <img id={`heads-${id}`} src={heads} alt="Cara" title="Cara" className="" />
        <img id={`tails-${id}`} src={tails} alt="Coroa" title="Coroa" className="" />
      </div>
    </div>
  )
}

export default Player
