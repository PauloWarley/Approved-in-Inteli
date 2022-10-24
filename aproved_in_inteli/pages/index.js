import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const App = () => {

  return (
    <div className={styles.root}>
    <Head>
      <title>Inteli Resultado</title>
      <meta name="description" content="Acompanhamento de resultados INTELI"/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body>
      <header className={styles.cabecalho}>
        <p className={styles.cabecalho_title}>Olá Candidato (a), <br/><br/> seja bem-vindo (a) à sua página de resultado do Processo Seletivo Inteli 2023.1</p>
      </header>
      <main className={styles.content}>
        <section className={styles.content_main}>
            <p>Se você quiser ser notificado quando sair o resultado por WhatsApp, coloque seu numero abaixo.</p>
            <label htmlFor="content-telefone"></label>
            <input className={styles.content_telefone} type="tel" name="número" id="número"/>
        </section>
      </main>
      <section className={styles.section}>
        <div className={styles.section_quote}>
            <quote className={styles.section_quote}>Boa sorte (controla a ansiedade) e que Ada Lovelace esteja com você :)</quote>
        </div>
        <div className={styles.section_button}>
            <button className={styles.section_button}>Enviar meu número</button>
        </div>
      </section>  
    </body>
    </div>
  )
}

export default App


