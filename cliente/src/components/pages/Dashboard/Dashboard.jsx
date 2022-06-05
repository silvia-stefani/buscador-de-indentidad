import React, { useState } from "react";

import Logo from "../../Logo";
import colors from "../../../utils/colors";
import styles from './Dashboard.module.scss';

import apiTwitter from '/api_prueba_twitter.json'

import Widget from "./widgets/Widget";
import MaestroMenu from "./MaestroMenu/MaestroMenu";
import ControlPanel from "./ControlPanel/ControlPanel";
import DIGIdentidad from "./DIGIdentidad/DIGIdentidad";

export default function Dashboard({ returndata }) {
    //console.log("RETURNDATA:", returndata);    

    return (
        <div className={styles.Dashboard}>

            <div style={{ position: "fixed", bottom: "1rem", left: "1rem" }}><Logo width="2.5rem" bg="#fff" color={colors.secondary} /></div>
            <div className={styles.ControlPanel}>
                <div className={styles.widget_column}>
                    <Widget box="google" dataLabel="Resultados en páginas públicas de Internet" data="Información extraída de Google"
                        api={returndata.googlename.results} />
                    <Widget box="hibp" dataLabel="Resultados en breachas de datos" data="Información extraída de Have I Been Pwned"
                        api={returndata.hibpans.breaches} />
                </div>
                <div className={styles.widget_column}>
                    <Widget box="twitter" dataLabel="Resultados en Twitter" data="Información extraída de Twitter"
                        api={apiTwitter.twitterans.statuses} />
                </div>
            </div>
            <MaestroMenu label="Panel de control" DIGIDentity={() => {showPanel()}} controlPanel={() => { setPanel(true) }} />
        </div>
    )

}