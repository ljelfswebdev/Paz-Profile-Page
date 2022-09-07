import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 

const Contact = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Paz | Contact</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <div>
              Paz Contact
            </div>
          </main>
    
        </div>
      )
};

export default Contact;