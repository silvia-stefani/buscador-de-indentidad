import React, { useState } from "react";

import styles from './GoogleBox.module.scss';

import { Copy, ArrowSquareOut, Trash } from "phosphor-react";
import api from '/api_prueba.json';
import Button from "../../../../Button/Button";
import EmojiBox from "../../../../EmojiBox/EmojiBox";

export default function GoogleBox({ title, description, onPress, logo }) {


    return (


        <div className={styles.box}>
            {/* <a href={data.link}>{data.displayed_link}</a> */}

            <div className={styles.information}>

                <div className={styles.left}>
                    <div className={styles.data}>
                        <img src={logo} alt="" />
                        <h4>{title}</h4>
                    </div>
                    <p>{description}</p>
                </div>

                <div className={styles.links}>
                    <p>Enlace <Copy /></p>
                    <p>Ir <ArrowSquareOut /></p>
                </div>
            </div>

            <div className={styles.manage}>
                <Button type="primary" icon="check" label="Mover a Mi DIGIdentidad" onPress={onPress} />
                <Trash />
            </div>
        </div>

    )
}