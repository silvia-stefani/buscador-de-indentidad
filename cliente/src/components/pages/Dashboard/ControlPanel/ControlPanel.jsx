import React from "react";
import styles from './ControlPanel.module.scss';

import apiTwitter from '/api_prueba_twitter.json';

import Widget from "../widgets/Widget";


export default function ControlPanel({returndata}) {

    return (
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
    )
}