import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'
import Link from 'next/link'
import prisma from "../../lib/prisma";

const Dashboard: NextPage = (props) => {


    return (

        <form /*onSubmit={handleSubmit}*/ className={styles.authgrid}>


            <p>full_name<input type="text" name="Name"/></p>
            <p>phone_number<input type="text" name="Phone"/></p>
            <p>birthday<input type={"date"} name="dr"/></p>
            <p>sex<input type="text" name="Sex"/></p>
            <button onClick={props.clients} name="sendUser">Найти</button>
        </form>
    )
}

export async function getServerSideProps()
{
    const addClient = () => {
        try {

            prisma.clients.create(
                    {
                        full_name: document.getElementsByName('Name')[0].value,
                        phone_number: document.getElementsByName('Phone')[0].value,
                        birthday: document.getElementsByName('dr')[0].value,
                        sex: document.getElementsByName('Sex')[0].value
                    }
                    )
        } catch (e) {
            alert("ERROR")
        }
    }
    return ({
        props:{
            clients: addClient
        }
    })
}
export default Dashboard