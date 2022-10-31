import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'
import Link from 'next/link'

const Dashboard: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Личный кабинет</title>
        <meta name="description" content="Личный кабинет" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Добро пожаловать в<br/> <a>Личный кабинет!</a>
        </h1>

        <div className={styles.grid}>
        
          <a className={styles.card}>
            <h2>TODO &rarr;</h2>
            <p>TODO<br/>TODO<br/>TODO</p>
            </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;<span className={styles.boldtext}>SanyaGlebShamil'</span>
          
        </a>
      </footer>
    </div>
  )
}

export default Dashboard
