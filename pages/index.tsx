import type { NextPage } from 'next'
import Header from '../components/Header';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
      <>
          <div className={styles.container}>
              <main className={styles.main}>
                  <Header></Header>
                  <div className={'p-6 flex-1 gap-4 flex w-full'}>
                      <div className={styles['left-content']}>
                          Some things on the left.
                      </div>
                      <div className={styles['right-content']}>
                          Some things on the right.
                      </div>
                  </div>
              </main>
          </div>
      </>
  )
}

export default Home
