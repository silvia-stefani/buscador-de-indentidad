import React from "react";

import styles from './Input.module.scss'

export default function Input({
    icon,
    name,
    example,
    type,
    onChange,
    onPress
}) {
    
    return(
            

        <div className={styles.box}>

            <label className={styles.label}>
                
            <i className={icon}
                style={{marginRight: ".5rem", display: "flex"}}>

            </i>    {name}

            </label>

            <div className={styles.input_box}>
                <input className={styles.input_text}
                    type={type} 
                    placeholder={example}
                    onChange={onChange}
                />
                
                <button onClick={onPress}>añadir</button>
            </div>

        </div>
                
    )
    
}