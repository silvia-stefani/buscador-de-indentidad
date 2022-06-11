import { useState } from 'react';

import styles from './Header.module.scss';
import colors from '../../utils/colors';
import { MagnifyingGlass } from 'phosphor-react';

import { Link, Navigate, useNavigate } from 'react-router-dom';

import {Logo} from '../Logo';
import {Button} from '../button/Button';



export const Header = () => {
    let navigate = useNavigate()
    return(
        <header className={styles.Header}>
            <Logo width="small" color="secondary"/>

            <nav className={styles.navbar}>
                <div className={styles.searchbox}>
                    <input className={styles.input} type="text" placeholder="Buscar"/>
                    <MagnifyingGlass size={20} />
                </div>
                <div className={styles.right}>
                    <Button label="El proyecto" type="primary"/>
                    <Button label="Empezar" type="secondary" onPress={()=>{navigate("/app")}}/>
                </div>
            </nav>
        </header>
    )
    
}