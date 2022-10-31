import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'
import Link from 'next/link'

const Dashboard: NextPage = () => {
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
            <Link href="/dashboard/stats"><h2>Статистика &rarr;</h2></Link>
            <p>TODO<br/>TODO<br/>TODO</p>
            </a>

            <a className={styles.card}>
            <Link href="/dashboard/clients"><h2>Клиенты &rarr;</h2></Link>
            <p>TODO<br/>TODO<br/>TODO</p>
            </a>

            <a className={styles.card}>
            <Link href="/dashboard/terminals"><h2>Терминалы &rarr;</h2></Link>
            <p>TODO<br/>TODO<br/>TODO</p>
            </a>

            <a className={styles.card}>
            <Link href="/dashboard/service"><h2>Услуги &rarr;</h2></Link>
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
