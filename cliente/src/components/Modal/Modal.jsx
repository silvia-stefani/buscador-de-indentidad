import React from "react";
import {Button} from "../Button/Button";
import EmojiBox from "../EmojiBox/EmojiBox";
import EmptyEm from "../Emojis/EmptyEm";

import styles from './Modal.module.scss'

export default function Modal({closeModal, goBack, emoji, width, type, label, question}) {
    
    return(
        <div className={styles.Modal} style={{backgroundColor: !emoji ? "rgb(0, 0, 0, .25)" : "#fff"}}>

            {emoji ? <EmojiBox type={type} label={label} width={width}/> :

            <div className={styles.box}>
                
                <div className={styles.question}>
                    {question}
                </div>
                <div className={styles.options}>
                    <Button type="ghost" label="Sí, quiero volver" onPress={goBack}/>
                    <Button type="primary" label="Continuar aquí" onPress={closeModal}/>
                </div>
            </div>
            }
        </div>
    )
}