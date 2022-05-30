import React, {useState} from "react";

import styles from './Dashboard.module.scss'

import ResultsWidget from './widgets/ResultsWidget/ResultsWidget.jsx'

export default function Dashboard({show}) {

    return (
        <div className={styles.Dashboard}
        
        style={{display: show}}>
            <div className={styles.widget}>
                <ResultsWidget/>
            </div>
        </div>
    )
    
}