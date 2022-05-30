import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import styles from './Form.module.scss';

import { project } from '/src/utils/project.js'

import Input from './Input/Input';
import Button from "../Button/Button";
import EmojiBox from "../EmojiBox/EmojiBox";

import { inputInfo } from '/src/utils/inputs.js';

import { Binoculars, X } from "phosphor-react";



export default function Form(props) {

  /*   const [empty, setEmpty] = useState(true)

 */
    ///// Contiene y cambia los datos

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [identification, setIdentification] = useState('');
    const [other, setOther] = useState('');

    const [values, setValues] = useState({});

    ////// handle click de cada input

    const handleClickName = (e) => {
        setValues({ ...values, name: name })
    }

    const handleClickMail = (e) => {
        setValues({ ...values, mail: mail })
    }

    const handleClickPhone = (e) => {
        setValues({ ...values, phone: phone })
    }

    const handleClickIdentification = (e) => {
        setValues({ ...values, identification: identification })
    }

    const handleClickOther = (e) => {
        setValues({ ...values, other: other })
    }

    const handleRemove = (key) => {
        const newValues = { ...values };
        delete newValues[key];
        setValues({ ...newValues });
    }

    let count = Object.keys(values).length;

    console.log(count);

    return (

        <div className={styles.Form}>

            <div className={styles.head}>
                <h1 className={styles.title}><Binoculars style={{ marginRight: ".5rem" }} size={32} weight="light"/> {project.title}</h1>
            </div>

            <div className={styles.info}>

                <div className={styles.privacy}>
                    <p>{project.privacy0}</p>
                    <p>{project.privacy1}</p>
                </div>


                <div className={styles.results}> {count == 0 ?
                    <EmojiBox type="empty" label="Añade algún campo para realizar la búsqueda" color="secondary"/> : 
                    <div className={styles.data_row}>
                        {Object.keys(values).map(function (key, index) {
                            let value = values[key];
                            return (
                                <div key={index} className={styles.data_in}>
                                    <p className={styles.value}>{value}</p>
                                    <X className={styles.delete_data} onClick={() => handleRemove(key)} />
                                </div>
                            );
                        })}
                    </div>}
                </div>
                <Button label="Realizar búsqueda" type ="primary" onPress={() => props.fetchData(values)} />
            </div>
            <div className={styles.inputs}>
                <Input data="name" name={inputInfo[0].name} example={inputInfo[0].example} onChange={e => setName(e.target.value)} onPress={() => { handleClickName() }} />
                <Input data="mail" name={inputInfo[1].name} example={inputInfo[1].example} onChange={e => setMail(e.target.value)} onPress={() => { handleClickMail() }} />
                <Input data="phone" name={inputInfo[2].name} example={inputInfo[2].example} onChange={e => setPhone(e.target.value)} onPress={() => { handleClickPhone() }} />
                <Input data="dni" name={inputInfo[3].name} example={inputInfo[3].example} onChange={e => setIdentification(e.target.value)} onPress={() => { handleClickIdentification() }} />
                <Input data="other" name={inputInfo[4].name} example={inputInfo[4].example} onChange={e => setOther(e.target.value)} onPress={() => { handleClickOther() }} />
            </div>
        </div>
    )
}