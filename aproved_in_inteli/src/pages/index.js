import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Input from '../components/InputMask'
import { useEffect, useState } from 'react'
import axios from 'axios'
import background from '../images/background.png'

const App = () => {
  const [number, setNumber] = useState('')

  useEffect(() => {
    // console.log({number})
  }

  )

  function sendPhone(phone){
    axios.post('/api/savenumber', {number: phone})
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
      <header className={styles.cabecalho}>
        <p className={styles.cabecalho_title}>Olá Candidato (a), <br/><br/> <strong>Seja bem-vindo (a)</strong> 
         à sua página de resultado do Processo Seletivo Inteli 2023.1</p>
      </header>
      <main className={styles.content}>
        <section className={styles.content_main}>
            <p>Se você quiser ser notificado quando sair o resultado por WhatsApp, coloque seu numero abaixo.</p>
            <label htmlFor="content-telefone"></label>
            <Input className={styles.content_telefone} onChange={(e) => setNumber(e.target.value)} name="número" id="número"/>
        </section>
      </main>
      <section className={styles.section}>
        <div className={styles.section_quote}>
            <div className={styles.section_quote}>Boa sorte (controla a ansiedade) e que Ada Lovelace esteja com você :)</div>
        </div>
        <div className={styles.section_button}>
            <button className={styles.section_button} onClick={() => sendPhone(number)} >Enviar meu número</button>
        </div>
      </section>  
    </div>
    <div className={styles.background}>
        <Image src={background} />
        <div style={{ color: "white", position: "relative", bottom: '30px', 
          left: '5px',
          fontFamily:"'Courier New', Courier, monospace;"}}>
          Desenvelopado by: Paulo Warley and Keylla || Aplicativo não possui vínculo com a INTELI!
        </div>
    </div>

    </>
  )
}

export default App


