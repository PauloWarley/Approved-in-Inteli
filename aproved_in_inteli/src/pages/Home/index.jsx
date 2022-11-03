import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Input from '../../components/InputMask/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header/index.jsx';
import FirstSection from '../../components/FirstSection'
import SecondSection from '../../components/SecondSection'
import ThirdSection from '../../components/ThirdSection'
import FourthSection from '../../components/FourthSection'

const Home = () => {
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

  //const whoWeAreRef = useRef(null);

  return (
    <>
      <Header  />
      <FirstSection />
      <SecondSection  />
      <ThirdSection />
      <FourthSection />
    </>
  )
}

export default Home


