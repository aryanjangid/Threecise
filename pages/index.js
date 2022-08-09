import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Squats, ThrillerMoves, HipHop, Excercise1, Excercise2, DanceOff, FunMoves } from '../components'
import Landing1 from '../components/Landing1'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     {/* <Squats/>
     <ThrillerMoves/>
     <HipHop/>
     <Excercise1/>
     <Excercise2/> */}
     <Landing1 />
     {/* <Bird/> */}
     {/* <DanceOff/>
     <FunMoves/> */}
    </div>
  )
}
