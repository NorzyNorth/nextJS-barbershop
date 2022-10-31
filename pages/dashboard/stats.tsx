import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'
import Link from 'next/link'
import StatisticsForm from '../components/StatisticsForm'
import prisma from "../../lib/prisma";

export async function getStaticProps(){
    
    const orders_db = await prisma.orders.findMany()
    const saloons_db = await prisma.saloons.findMany()
    const employee_db = await prisma.employee.findMany() 
    
    const saloons_in_json = JSON.parse(JSON.stringify(saloons_db))
    const orders_in_json = JSON.parse(JSON.stringify(orders_db))
    const employee_in_json =JSON.parse(JSON.stringify(employee_db))

    return ({
        props:{
            orders: orders_in_json,
            saloons : saloons_in_json,
            employee: employee_in_json
        }
    })
}


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
          Добро пожаловать в<br/> <a>Личный кабинет!</a><br/> Выберите временной отрезок
        </h1>

        <StatisticsForm orders={props.orders} saloons={props.saloons} employee ={props.employee}/>
        {/* <div className={styles.grid}>
        
          <a className={styles.card}>
            <h2>TODO &rarr;</h2>
            <p>TODO<br/>TODO<br/>TODO</p>
            </a>

        </div> */}
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
