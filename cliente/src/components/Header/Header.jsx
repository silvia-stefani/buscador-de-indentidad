import React from "react";

import logo from "/public/images/logo_digid.svg"
import Button from "../Button/Button";

import styles from "./Header.module.scss"

export default function Header(props) {
    
    return(
        <header className={styles.Header}>
            <Button label="Volver a la web" special="back" type="ghost" />
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>
        </header>
    )
}