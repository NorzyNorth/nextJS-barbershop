import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'
import Link from 'next/link'
import prisma from "../../lib/prisma";
import SpentForm from '../components/spentform'

const Dashboard: NextPage = (props) => {
    
    return (
      <div className={styles.container}>
        <Head>
          <title>Отработанные Клиенты</title>
          <meta name="description" content="Отработанные клиенты" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Отработанные клиенты
          </h1>
          <SpentForm clients={props.clients}/>
          
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
  
  export const getStaticProps = async () => {
    try {
    const clients_db = await prisma.clients.findMany()
    
    const clients_json =JSON.parse(JSON.stringify(clients_db))
    return ({
        props:{
            clients: clients_json      
          }
    })
    } catch (e)
    {
        alert("404")
    }

}





  export default Dashboard