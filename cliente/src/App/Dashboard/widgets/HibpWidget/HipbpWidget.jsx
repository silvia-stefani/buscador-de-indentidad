import React, { useState } from "react";

import styles from './HibpWidget.module.scss'

import { Trash } from "phosphor-react";


export default function HibpWidget({logo, title, description}) {

    return (
                <div className={styles.box}>
                    {/* <a href={data.link}>{data.displayed_link}</a> */}

                    <div className={styles.information}>
                        <img src={logo} alt="" />
                        <div className={styles.data}>
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    </div>

                    <div className={styles.manage}>
                        <Button type="ghost" special="see" label="Saber más sobre este ataque" />
                        <Trash />
                    </div>
                </div>
        
    )
}