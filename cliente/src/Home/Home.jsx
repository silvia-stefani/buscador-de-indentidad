import React, { useState } from 'react'
import styles from './Home.module.scss'

import {Button} from '../components/Button/Button';

import colors from '../utils/colors';
import {Logo} from '../components/Logo';
import {Header} from '../components/Header/Header';


export const Home = (props) => {


  return (

    <div className={styles.Home}>
      <Header/>
      <div className={styles.introduction}>
        <div className={styles.head_page}>
          <Logo width="large" outlineDark={true} color="primary"/>
          <svg className={styles.digid} fill="none" viewBox="0 0 155 27">
            <path fill="#191919" d="M0 27h21.38v-5.4H5.344V5.4h16.034v16.2h5.345V5.4H21.38V0H0v27ZM32.048 5.4h10.69v16.2h-10.69V27h26.724v-5.4h-10.69V5.4h10.69V0H32.048v5.4ZM64.096 27H90.82V10.8H74.786v5.4h10.69v5.4H69.44V5.4h21.38V0H64.095v27ZM96.144 5.4h10.69v16.2h-10.69V27h26.724v-5.4h-10.689V5.4h10.689V0H96.144v5.4ZM155 27h-21.379v-5.4h16.034V5.4h-16.034v16.2h-5.345V5.4h5.345V0H155v27Z" />
          </svg>
          <h1 className={styles.claim}>Empieza a cuidar tu identidad digital</h1>
        </div>
        <div className={styles.buttons}>
          <Button label="¿Qué es la identidad digital?" type="ghost" />
          <Button label="Recursos" type="ghost" />
          <Button label="El proyecto" type="ghost" />

        </div>
      </div>

      <div className={styles.resources}>
        <div className={styles.box}>
          <div className={styles.games}>
            juegos
            {/* <iframe className={styles.game} src="https://educainternet.es/webappscode/17/index.html" width="800" height="600" objecttype="webapp" webkitAllowFullScreen="true" allowfullscreen="true" mozallowfullscreen="true"></iframe> */}
          </div>
          <div className={styles.news}>noticias y consejos</div>
        </div>
      </div>

    </div>

  )

}