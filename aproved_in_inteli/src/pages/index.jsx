import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Input from '../components/InputMask'
import { useEffect, useState } from 'react'
import axios from 'axios'
import background from '../images/background.png'

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
      {/* <div className={styles.header}>
        <ul>
            <li >  Home  </li>
            <li >Leaderboard </li> 
        </ul>
      </div> */}
      <hero className={styles.hero}>
        <p className={styles.hero_title}>Olá Candidato (a), <br/><br/> <strong>Seja bem-vindo (a)</strong> 
         à sua página de resultado do Processo Seletivo Inteli 2023.1</p>
      </hero>
      <main className={styles.content}>
        <section className={styles.content_main}>
            <p>Se você quiser ser notificado quando sair o resultado por WhatsApp, coloque seu numero abaixo.</p>
            <label htmlFor="content-telefone"></label>
            <Input className={styles.content_telefone} onChange={(e) => setNumber(e.target.value)} name="número" id="número"/>
        </section>
      </main>
      <section className={styles.section}>
        <br/>

        <div className={styles.section_quote}>
            <div className={styles.section_quote}>Boa sorte (controla a ansiedade) e que Ada Lovelace esteja com você :)</div>
        </div>

        <br/>
        <div className={styles.section_button}>
            <button className={styles.section_button} onClick={() => sendPhone(number)} >Enviar meu número</button>
        </div>

      </section>  
    </div>
    <div className={styles.background}>
        <Image src={background} alt='image' />
        <div style={{ color: "white", position: "relative", bottom: '30px', 
          left: '5px',
          fontFamily:"Courier New"}}>
          Desenvelopado by: Paulo Warley and Keylla || Aplicativo não possui vínculo com a INTELI!
        </div>
    </div>

    </>
  )
}

export default App


