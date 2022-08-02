import Header from '../components/Header';
import { IHeader } from '../models/IHeader';
import styles from '../styles/Home.module.scss'

function Home({ data }: { data: IHeader }) {
  return (
      <>
          <div className={styles.container}>
              <main className={styles.main}>
                  <Header data={data}></Header>
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
  );
}

export async function getServerSideProps () {
    const data = {
        heading: 'I am a heading!',
        date: 'I am a date',
        raid: 'I am a raid',
        quote: 'I am a quote'
    }
    return {
        props: {
            data
        }
    }
}

export default Home
