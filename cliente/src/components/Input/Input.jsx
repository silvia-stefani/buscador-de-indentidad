import React from "react";
import PropTypes from 'prop-types'

import styles from './Input.module.scss'

import { PlusCircle, UserCircle, Envelope, IdentificationCard, Phone, Question } from "phosphor-react";

export const  Input = ({
    data,
    name,
    example,
    onChange,
    onPress
}) => {

    const dataInputIcon =
    data === "name" ? <UserCircle /> : data === "mail" ? <Envelope /> : 
    data === "phone" ? <Phone /> : data === "dni" ? <IdentificationCard /> : 
    data === "other" ? <Question /> : null 

    const dataInputLabel =
    data === "name" ? "Nombre y apellidos" : data === "mail" ? "Correo electróncio" : 
    data === "phone" ? "Teléfono" : data === "dni" ? "Número de DNI" : 
    data === "other" ? "Otros" : null 
 
    return (

        <div className={styles.box}>
            <label className={styles.label}>
            {dataInputIcon} {dataInputLabel}
            </label>
            <div className={styles.input_box}>
                <input className={styles.input} type="text" placeholder={example} onChange={onChange} />
                {/* <PlusCircle onClick={onPress} size={24} weight="light" /> */}
            </div>
        </div>

    )

}

Input.propTypes = {

  data: PropTypes.oneOf(['name', 'mail', 'phone', 'dni', 'other'])

};

Input.defaultProps = {
    
  example: "This is an Input",
  data: 'name'
};
