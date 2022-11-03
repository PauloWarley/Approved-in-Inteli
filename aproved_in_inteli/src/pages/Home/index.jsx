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
import SnakeGame from '../../components/SnakeGame'

const Home = () => {
  const [number, setNumber] = useState('')


  //const whoWeAreRef = useRef(null);

  return (
    <>
      <Header  />
      <FirstSection />
      <SecondSection  />
      <ThirdSection />
      <FourthSection />
      <SnakeGame />
    </>
  )
}

export default Home


