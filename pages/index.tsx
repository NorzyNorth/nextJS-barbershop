'use strict';
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router';
import React from 'react';
import {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css'
import AuthForm from './components/AuthForm'
import Footer from './components/Footer';
import prisma from '../lib/prisma';
import {useSession, signOut} from 'next-auth/react';


//Functions
let isLogged = 1;

// Page
const Home: NextPage = () => {
    const {data: session, status} = useSession();

    let router = useRouter();

    function redir() {
        useEffect(() => {
            let push = router.push('/dashboard');
            console.log(push);
        })
    }

    if (session) {
        redir();
        return (
            <div className={styles.container}>
                <Head>
                    <title>Переходим...</title>
                    <meta name="description" content="Парикмахерская"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>


                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Переходим в <br/><a>личный кабинет...</a>
                    </h1>
                </main>
            </div>
        )
    } else if (!session) {

        return (
            <div className={styles.container}>
                <Head>
                    <title>Barbershop</title>
                    <meta name="description" content="Парикмахерская"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <main className={styles.main}>
                    <AuthForm/>
                </main>

                <Footer/>
            </div>
        )
    }
}

export default Home
