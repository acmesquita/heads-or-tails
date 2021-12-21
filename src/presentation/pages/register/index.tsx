import React from 'react'
import styles from './styles.scss'
import { Player } from '@/presentation/pages/register/components'

const Register: React.FC = () => {
  return (
    <div className={styles.registerWrapper}>
      <h1>Register Players</h1>
      <form>
        <div className={styles.playersWrapper}>
          <Player id='player1' label='Player 1'/>
          <Player id='player2' label='Player 2'/>
        </div>
        <button>Play</button>
      </form>
    </div>
  )
}

export default Register
