import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 

const Curriculum = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Paz | Curriculum</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <div>
              Paz Curriculum
            </div>
          </main>
    
        </div>
      )
};

export default Curriculum;