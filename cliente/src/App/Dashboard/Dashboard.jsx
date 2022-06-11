import React, { useState } from "react";

import {Logo} from "../../components/Logo";
import colors from "../../utils/colors.js";
import styles from './Dashboard.module.scss';

import { Outlet } from "react-router-dom";

import MaestroMenu from "./MaestroMenu/MaestroMenu";

export default function Dashboard() {
    //console.log("RETURNDATA:", returndata);    
  
    return (
        <div className={styles.Dashboard}>

            <div style={{ position: "fixed", bottom: "1rem", left: "1rem" }}><Logo width="2.5rem" bg="#fff" color={colors.secondary} /></div>
            <Outlet/>
            <MaestroMenu/>
        </div>
    )

}