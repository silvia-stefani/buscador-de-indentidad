import React, { useState } from "react";

import styles from './TwitterBox.module.scss';

import { Copy, ArrowSquareOut, Trash } from "phosphor-react";

import Button from "../../../../components/Button/Button";

export default function TwitterBox({ userName, userAlias, text }) {


    return (


            <div className={styles.box}>
                {/* <a href={data.link}>{data.displayed_link}</a> */}

                <div className={styles.information}>

                    <div className={styles.data}>
                        <div className={styles.user_name}><h4>{userName}</h4><p>@{userAlias}</p></div>
                        <p>{text}</p>
                    </div>
                    <div className={styles.links}>
                        <p>Enlace <Copy /></p>
                        <p>Ir <ArrowSquareOut /></p>
                    </div>
                </div>

                <div className={styles.manage}>
                    <Button type="primary" icon="check" label="Mover a Mi DIGIdentidad" />
                    <Trash />
                </div>
            </div>

    )
}