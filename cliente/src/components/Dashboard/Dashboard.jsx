import React, {useState} from "react";

import styles from './Dashboard.module.scss'

import ResultsWidget from './widgets/ResultsWidget/ResultsWidget.jsx'

export default function Dashboard(props) {
    console.log("RETURNDATA:", props.returndata);

    return (
        <div className={styles.Dashboard}>
            <div className={styles.widget}>
                <ResultsWidget />
            </div>
        </div>
    )
    
}