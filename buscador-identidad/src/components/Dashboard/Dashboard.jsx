import React, {useState} from "react";

import styles from './Dashboard.module.scss'

export default function name({show}) {

    return (
        <div className={styles.Dashboard}
        
        style={{display: show}}>
            <div className={styles.widget}>
                data
            </div>
        </div>
    )
    
}