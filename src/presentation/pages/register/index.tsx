import { Result } from '@/domain/models'
import React from 'react'
import styles from './styles.scss'
import tails from '@/presentation/assets/brasao.png'
import heads from '@/presentation/assets/busto.png'

const Register: React.FC = () => {
  return (
    <div className={styles.registerWrapper}>
      <h1>Register Players</h1>
      <form>
        <div className={styles.playersWrapper}>
          <div className={styles.playerWrapper}>
            <label htmlFor="player1">Player 1</label>
            <input type="text" name="player1" autoFocus />
            <div className={styles.facesWrapper}>
              <img id="heads-player1" src={heads} alt="Cara" title="Cara" className="" />
              <img id="tails-player1" src={tails} alt="Coroa" title="Coroa" className="" />
            </div>
          </div>
          <div className={styles.playerWrapper}>
            <label htmlFor="player2">Player 2</label>
            <input type="text" name="player2" />
            <div className={styles.facesWrapper}>
              <img id="heads-player2" src={heads} alt="Cara" title="Cara" className="" />
              <img id="tails-player2" src={tails} alt="Coroa" title="Coroa" className="" />
            </div>
          </div>
        </div>
        <button>Play</button>
      </form>
    </div>
  )
}

export default Register
