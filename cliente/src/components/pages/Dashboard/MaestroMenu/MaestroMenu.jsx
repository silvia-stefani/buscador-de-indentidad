import React, {useState} from "react";
import { Gear, Link, X } from "phosphor-react";

import styles from './MaestroMenu.module.scss';

import Button from "../../../Button/Button";
import Modal from "../../../Modal/Modal";
import { useNavigate } from "react-router-dom";

export default function MaestroMenu({ label, DIGIdentity, controlPanel }) {

    const [modal, setModal] = useState(false)

    let navigate = useNavigate();

    return (
        <div className={styles.MaestroMenu} >

            {modal? <Modal closeModal={() => {setModal(false)}} goBack={() => {navigate("/")}}/> : null}

            <h3><Gear /> {label}</h3>
            <nav>
                <div className={styles.navigation}>
                    <Button type="secondary" icon="settings" label="Panel de control" onPress={() => {navigate("/dashboard")}}/>
                    <Button type="primary" icon="check" label="Mi DIGIdentidad" onPress={() => {navigate("/DIGIdentity")}}/>
                </div>
                <Button type="lineal" icon="trash" label="Papelera" />
            </nav>

            <div className={styles.filters}>
                <select id="seguridad">
                    <option defaultValue>Seguridad</option>
                    <option value="Español">Web segura</option>
                    <option value="Inglés" >Web no segura</option>
                </select>
                <select id="idioma">
                    <option defaultValue>Idioma</option>
                    <option value="Español">Español</option>
                    <option value="Inglés" >Inglés</option>
                </select>
            </div>

            <div className={styles.tags}>
                <p>Datos de la búsqueda</p>
                <div className={styles.tag}><p>Nombre y apellidos</p><X /></div>
                <div className={styles.tag}><p>Correo electrónico </p><X /></div>
                <div className={styles.tag}><p>Teléfono</p><X /></div>
                <Button type="lineal" icon="pen" label="Editar búsqueda" onPress={() => {setModal(true)}}/>
            </div>

            <Button label="Volver a la web" icon="back" type="ghost" onPress={() => {navigate("/")}} />
        </div>
    )

}