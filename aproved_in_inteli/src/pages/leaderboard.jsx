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

  async function sendPhone(phone){
    var response = await axios.post('/api/savenumber', {number: phone})

    if ( response.status == 200){
      setModal(modalConclusion(2))
    }
    if ( response.status == 201){
      setModal(modalConclusion(0))
    }
    if ( response.status == 203){
      setModal(modalConclusion(1))
    }

  }

  return (
    <>
    {/* {modalConclusion()} */}
    {modal}
    <Head>
      <title>Inteli Resultado</title>
      <meta name="description" content="Acompanhamento de resultados INTELI"/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className={styles.root}>
        <header className={styles.header}>
            <ul>
            <Link href="/">   <li >  Home </li>  </Link>
            <Link href="/leaderboard"> <li > Leaderboard </li> </Link> 
            </ul>
        </header>
        <hero className={styles.leaderboard}>
            <div>
                <Image src={leaderboard}  />

            </div>
        </hero>
    </div>

    <div className={styles.background}>
        <Image src={background} />
        <div style={{ color: "white", position: "relative", bottom: '30px', 
          left: '5px',
          fontFamily:"Courier New"}}>
          {/* Desenvelopado by: Paulo Warley and Keylla || Aplicativo não possui vínculo com a INTELI! */}
        </div>
    </div>

    </>
  )
}

export default App


