import React from "react";

import styles from './Input.module.scss'

import { PlusCircle, UserCircle, Envelope, IdentificationCard, Phone, Question } from "phosphor-react";

export default function Input({
    data,
    name,
    example,
    onChange,
    onPress
}) {

    const dataInputIcon =
    data === "name" ? <UserCircle /> : data === "mail" ? <Envelope /> : 
    data === "phone" ? <Phone /> : data === "dni" ? <IdentificationCard /> : 
    data === "other" ? <Question /> : null 

    return (


        <div className={styles.box}>

            <label className={styles.label}>

            {dataInputIcon} {name}

            </label>

            <div className={styles.input_box}>

                <input className={styles.input_text}
                    type="text"
                    placeholder={example}
                    onChange={onChange}
                />
                <PlusCircle onClick={onPress} size={24} weight="light" />
            </div>

        </div>

    )

}