import React, { useState } from 'react'
import styles from './Home.module.scss'

import Button from '../components/Button/Button';

import colors from '../utils/colors';
import Logo from '../components/Logo';
import Header from '../components/Header/Header';


export default function Home(props) {


  return (

    <div className={styles.Home}>

      <Header/>
      <div className={styles.introduction}>
        <div className={styles.head_page}>
          <svg fill="none" viewBox="0 0 217 175">
            <path fill="#FFE6FE" d="M130.711 1.4H91.049v17.22h39.662V1.4Zm58.566 74.75H27.723V56.192h161.554v19.96Zm0 78.371v-78.37h26.309v78.37h-26.309Zm-161.554 0h161.554V173.6H27.723v-19.079Zm0 0v-78.37H1.413v78.37h26.31Zm24.557-53.988h29.817v29.606H52.279v-29.606Zm114.195 0h-29.818v29.606h29.818v-29.606Z" />
            <path stroke="#6876A9" strokeWidth="2" d="M111.632 56.191v-37.57m77.645 57.53V56.19H27.723v19.96m161.554 0v78.37m0-78.37h26.309v78.37h-26.309m0-78.37H27.723m0 0v78.37m0-78.37H1.413v78.37h26.31m161.554 0v19.08H27.723v-19.079m161.554 0H27.723M91.05 1.401h39.662v17.22H91.049V1.4Zm-8.952 99.132H52.279v29.606h29.818v-29.606Zm54.56 0h29.818v29.606h-29.818v-29.606Z" />
          </svg>
          <svg className={styles.digid} fill="none" viewBox="0 0 155 27">
            <path fill="#191919" d="M0 27h21.38v-5.4H5.344V5.4h16.034v16.2h5.345V5.4H21.38V0H0v27ZM32.048 5.4h10.69v16.2h-10.69V27h26.724v-5.4h-10.69V5.4h10.69V0H32.048v5.4ZM64.096 27H90.82V10.8H74.786v5.4h10.69v5.4H69.44V5.4h21.38V0H64.095v27ZM96.144 5.4h10.69v16.2h-10.69V27h26.724v-5.4h-10.689V5.4h10.689V0H96.144v5.4ZM155 27h-21.379v-5.4h16.034V5.4h-16.034v16.2h-5.345V5.4h5.345V0H155v27Z" />
          </svg>
          <h1 className={styles.claim}>Empieza a cuidar tu identidad digital</h1>
        </div>
        <div className={styles.buttons}>
          <Button label="¿Qué es la dientidad digital?" type="ghost" />
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