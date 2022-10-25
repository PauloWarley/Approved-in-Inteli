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
  const [number, setNumber] = useState('')
  const [modal, setModal] = useState('')


  useEffect(() => {
    // console.log({number})
  }

  )

  function modalConclusion(id){
    var texto = [
      'Cadastro Realizado Com Sucesso!',
      'Erro ao Cadastrar!',
      'Número já Cadastrado!'
    ]

    return(
      <div id={'background'} style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(20,20,20, 0.4)',
        display: 'flex',
        flexDirection: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px'
      }} onClick={(e)=> e.target.id == 'background'?setModal(<></>):''}>
        <div style={{
          width: '40%',
          height: '20%',
          backgroundColor: 'white',
          fontSize: '30px',
          fontWeight: 'bold',
          fontFamily: "'Courier New', Courier, monospace",
          color: '#2c263d',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px'
        }}>
          {texto[id]}
        </div>
      </div>
    )
  }


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
    </div>

    <div className={styles.background}>
        <Image alt='image' src={background} />

    </div> 

    </>
  )
}

export default App


