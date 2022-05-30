import React, { useState } from "react";

import styles from './ResultsWidget.module.scss'
import api from '/api_prueba.json';

export default function ResultsWidget({ }) {

    const query = api.search_parameters.q;

    let boldName = false;

    console.log(boldName);

    console.log(query);

    return (
        <div className={styles.Results}>

            <div className={styles.heading_widget}>
            Resultados en páginas públicas de Internet<br></br>
            Información extraída de Google
            </div>

            {api.organic_results.map((data, key) => (
                <div key={key} className={styles.organic_result}>
                    <a href={data.link}>{data.displayed_link}</a>
                    <h4>{data.title}</h4>
                    <p>{data.snippet}</p>
                </div>
            ))}
        </div>
    )
}