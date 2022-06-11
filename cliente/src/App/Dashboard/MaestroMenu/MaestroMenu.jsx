import React, {useState} from "react";
import { Gear, Trash, UserRectangle, Link, X } from "phosphor-react";

import styles from './MaestroMenu.module.scss';

import {Button} from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";

export default function MaestroMenu() {

    const [modalEdit, setModalEdit] = useState(false)
    const [modalBack, setModalBack] = useState(false)

    const [label, setLabel] = useState({name: "Panel de control", icon: "settings"})

    const setControlPanel = () => {
        setLabel({name: "Panel de control", icon: "settings"})
        navigate("control")
    }
    const setDigidentity = () => {
        setLabel({name: "Mi DIGIdentidad", icon: "user"})
        navigate("DIGIdentidad")
    }
    const seTrash = () => {
        setLabel({name: "Papelera", icon: "trash"})
        navigate("papelera")
    }

    const turnBack = () => {
        
    }
    let navigate = useNavigate();

    return (
        <div className={styles.MaestroMenu} >

            {modalEdit? <Modal question={<>Editar la búsqueda hará que <b>se borre el progreso</b>.<br></br> ¿Estás seguro de que quieres volver atrás?</>} closeModal={() => {setModalEdit(false)}} goBack={() => {navigate("/app")}}/> : null}
            {modalBack? <Modal question={<>¡Estás volviendo a la página principal! Esto hará que <b>se borre el progreso</b>.<br></br> ¿Estás seguro de que quieres volver atrás?</>} closeModal={() => {setModalBack(false)}} goBack={() => {navigate("/")}}/> : null}

            <h3>{ label.icon == "settings" ? <Gear /> : label.icon == "trash" ? <Trash /> : label.icon == "user" ? <UserRectangle /> : null}
            {label.name}</h3>
            <nav>
                <div className={styles.navigation}>
                    <Button type="secondary" icon="settings" label="Panel de control" onPress={setControlPanel}/>
                    <Button type="primary" icon="check" label="Mi DIGIdentidad" onPress={setDigidentity}/>
                </div>
                <Button type="lineal" icon="trash" label="Papelera" onPress={seTrash}/>
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
                <Button type="lineal" icon="pen" label="Editar búsqueda" onPress={() => {setModalEdit(true)}}/>
            </div>

            <Button label="Volver a la web" icon="back" type="ghost" onPress={() => {setModalBack(true)}} />
        </div>
    )

}