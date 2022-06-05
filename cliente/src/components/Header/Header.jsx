import { useState } from 'react';

import styles from './Header.module.scss';
import colors from '../../utils/colors';
import { MagnifyingGlass } from 'phosphor-react';

import Logo from '../Logo';
import Button from '../button/Button';

export default function Header(params) {

    return(
        <header className={styles.Header}>
            <Logo width="3rem" color={colors.secondary}/>

            <nav className={styles.navbar}>
                <div className={styles.searchbox}>
                    <input className={styles.input} type="text" placeholder="Buscar"/>
                    <MagnifyingGlass size={20} />
                </div>
                <div className={styles.right}>
                    <Button label="El proyecto" type="primary"/>
                    <Button label="Empezar" type="secondary"/>
                </div>
            </nav>
        </header>
    )
    
}