import type { NextPage } from 'next'
import Head from 'next/head'

import { useEffect, useState } from 'react'

import { filterOutDev } from '../utils/helper'
import {devs} from '../utils/allDevNames'

import TicketBoard from '../components/TicketBoard'
import SpecialtyTicketsPanel from '../components/SpecialtyTicketsPanel'

import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const [data, setData] = useState({})
  const [ptoDev, setPtoDevs] = useState([])
  const [devCheckBox, setDevCheckBox] = useState(devs)

  useEffect(()=> {    
    setData(filterOutDev(ptoDev))
  },[ptoDev])


  const removeDev = (name) => {

    if(ptoDev.includes(name)) {
      setPtoDevs(ptoDev.filter(dev => dev !== name))
      return
    }
    setPtoDevs([...ptoDev, name])

    const selectedName = devCheckBox.map(dev => {
      if (dev.name === name){
        dev.pto = !dev.pto
      }
      return dev
    })
    
    setDevCheckBox(selectedName)
  }



  const date = new Date()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Red Team View" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Red Team View
        </h1>
        <div>
          <button className={styles.button}>Assign PR</button>
          <button className={styles.button}>Assign Site Maps</button>
          <label>Filter Out Devs on PTO</label>
          {
            devCheckBox && devCheckBox.map(dev => {
              return (
                <div key={Math.random()} >
                  <input type='checkbox' checked={dev.pto} onChange={() => removeDev(dev.name)}/>
                  {dev.name}
                </div>
              )}
            )
          }        
        </div>
        <TicketBoard data={data} />
        <SpecialtyTicketsPanel type={'pr'} data={data} />
        <SpecialtyTicketsPanel type={'siteMap'} data={data} />
      </main>

      <footer className={styles.footer}>
       © {date.getFullYear()}
      </footer>
    </div>
  )
}

export default Home
