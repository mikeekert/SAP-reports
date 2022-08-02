import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          This is an app.
          <div className={'p-6'}>hmm</div>
      </main>
    </div>
  )
}

export default Home
