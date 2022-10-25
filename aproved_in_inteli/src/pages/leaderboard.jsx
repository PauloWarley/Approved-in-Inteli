import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Input from '../components/InputMask'
import { useEffect, useState } from 'react'
import axios from 'axios'
import background from '../images/background.png'
import leaderboard from '../images/leaderboard.png'

const App = () => {
  return (
    <>
    <Head>
      <title>Inteli Resultado</title>
      <meta name="description" content="Acompanhamento de resultados INTELI"/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.root}>
        <div className={styles.header}>
            <ul>
            <li > Home    </li>
            <li > Leaderboard   </li> 
            </ul>
        </div>
        <hero className={styles.leaderboard}>
            <div>
                <Image alt='image' src={leaderboard}  />

            </div>
        </hero>
        <div className={styles.background}>
            <Image alt='image' src={background} />
        </div> 
    </div>



    </>
  )
}

export default App


