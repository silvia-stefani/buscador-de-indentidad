import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import styles from './Form.module.scss';
import colors from "../../../utils/colors";

import { project } from '/src/utils/project.js'

import Header from "../../Header/Header";
import Logo from "../../Logo";

import Input from '/src/components/Input/Input';
import Button from "/src/components/Button/Button";
import EmojiBox from "/src/components/EmojiBox/EmojiBox";

import { inputInfo } from '/src/utils/inputs.js';

import { Binoculars, X } from "phosphor-react";

export default function Form(props) {
    
    ///// Contiene y cambia los datos

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [identification, setIdentification] = useState('');
    const [other, setOther] = useState('');

    const values = {name: name, mail: mail, phone: phone, identification: identification,  other: other};

    ////// handle click de cada input

    // const checkName = (e) => {
    //     if (!name == '')
    //     {setValues({ ...values, name: name })}
    // }

    // const checkMail = (e) => {
    //     if (!mail == '')
    //     setValues({ ...values, mail: mail })
    // }

    // const checkPhone = (e) => {
    //     if (!phone == '')
    //     {setValues({ ...values, phone: phone })}
    // }

    // const checkIdentification = (e) => {
    //     if (!identification == '')
    //     {setValues({ ...values, identification: identification })}
    // }

    // const checkOther = (e) => {
    //     if (!other == '')
    //     {setValues({ ...values, other: other })}
    // }

    // const checkAll = (e) =>{
    //     checkName() &
    //     checkMail() &
    //     checkPhone() &
    //     checkIdentification() &
    //     checkOther()&
    //     console.log(values);
    // }

    let count = Object.keys(values).length;

    //console.log(count);


    return (

        <div className={styles.Form}>

            <div style={{position: "fixed", top: "1rem", left: "1rem"}}><Logo width="3rem" color={colors.secondary} /> </div>
            <div style={{position: "fixed", top: "1rem", right: "1rem"}}><Button label="Volver a la web" icon="back" type="ghost" onPress={() => { navigate("/") }} /></div>

            {/* <Header/> */}

            <div className={styles.info}>

                <div className={styles.description}>
                    <h1 className={styles.title}><Binoculars style={{ marginRight: ".5rem" }} size={32} weight="light" /> {project.title}</h1>
                    <div className={styles.privacy}>
                        <p>{project.privacy0}</p>
                        <p>{project.privacy1}</p>
                    </div>
                </div>

                {/*                 <div className={styles.results}> {count == 0 ?
                    <EmojiBox type="love" label="¡Bienvenidx al gestor de identidad digital!" color="secondary"/> : 
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
                </div> */}
                <Button label="Realizar búsqueda" type="primary" onPress={() => {props.fetchData(values)}} />
                <EmojiBox type="love" label="¡Bienvenidx al gestor de identidad digital!" width="7rem" />

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