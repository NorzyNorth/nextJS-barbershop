import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'
import Link from 'next/link'
import OrdersForm from '../components/OrdersForm'
import prisma from "../../lib/prisma";

let employee_id = 1 //todo удалить и заменить на айдишник работника, вошедшего в систему

export async function getStaticProps(){
    
    const orders_db = await prisma.services.findMany()
    
    const current_saloond_id = await prisma.employee.findUnique({where:{
        id: employee_id
    }})

    const orders_saloons_db = await prisma.orders_saloons.findMany({where:{
        id_saloon: current_saloond_id 
    }})


    const orders_in_json = JSON.parse(JSON.stringify(orders_db))
    const orders_saloons_in_json = JSON.parse(JSON.stringify(orders_saloons_db))

    return ({
        props:{
            orders: orders_in_json,
            orders_saloons: orders_saloons_in_json
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
          Добро пожаловать в<br/> <a>Chio-Chio!</a><br/> 
        </h1>

        <OrdersForm orders={props.orders} orders_saloons={props.orders_saloons}/>
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
