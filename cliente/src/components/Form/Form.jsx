import React, {useState} from "react";

import styles from './Form.module.scss';

import {project} from '/public/utils/project.js'

import Input from './Input/Input';
import Dashboard from '../Dashboard/Dashboard';

import {inputInfo} from '/public/utils/inputs.js'

export default function Form({showDash, hide}) {


    ///// Contiene y cambia los datos

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [identification, setIdentification] = useState('');
    const [other, setOther] = useState('');

    ///// Array de datos

    const [value, setValue] = useState([]);

    const handleClick = (e) => {
        
        setValue([ name, mail, phone, identification, other])
    }

    const fetchData = () => {

    fetch("http://localhost:8000/getData/")
      .then(res => res.json())
      .then(showDash)
      
    }

    return (

        <div className={styles.Form} style={{display: hide}}>

            <div className={styles.head}>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.privacy}>{project.privacy}</p>
            </div>

            <div className={styles.content}>
                <div className={styles.inputs}>
                    <div className={styles.text_inputs}>
                        
                        <Input type="text"
                        
                        icon={inputInfo[0].icon}
                        name={inputInfo[0].name}
                        example={inputInfo[0].example}
                        onChange={e => setName(e.target.value)}

                        onPress={() => {
                            handleClick()
                        }}

                        />

                        <Input type="text"
                        
                        icon={inputInfo[1].icon}
                        name={inputInfo[1].name}
                        example={inputInfo[1].example}
                        onChange={e => setMail(e.target.value)}

                        onPress={() => {
                            handleClick()
                        }}

                        />

                        <Input type="text"
                        
                        icon={inputInfo[2].icon}
                        name={inputInfo[2].name}
                        example={inputInfo[2].example}
                        onChange={e => setPhone(e.target.value)}

                        onPress={() => {
                            handleClick()
                        }}

                        />

                        <Input type="text"
                        
                        icon={inputInfo[3].icon}
                        name={inputInfo[3].name}
                        example={inputInfo[3].example}
                        onChange={e => setIdentification(e.target.value)}

                        onPress={() => {
                            handleClick()
                        }}

                        />

                        <Input type="text"
                        
                        icon={inputInfo[4].icon}
                        name={inputInfo[4].name}
                        example={inputInfo[4].example}
                        onChange={e => setOther(e.target.value)}

                        onPress={() => {
                            handleClick()
                        }}

                        />

                    </div>

                    <div className={styles.image_inputs}>
                        <Input type="file" />
                    </div>
                </div>
            
                <div className={styles.results}>
                    
                    <div className={styles.data_row}>
                        
                        {value.map((data, i) => (

                            data === '' ?

                            null

                            :
                            
                            <div key={i} className={styles.data_in}>
                                
                                <p style={{marginRight: ".5rem"}}>{data}</p>
                                <i className="ph-x" 
                                
                                style={{color: "white"}}
                                onClick={(e) => {
                                    ///// eliminar dato del array "value"
                                }}
                                />
                            
                            </div>
                        ))}

                    </div>
                    <button className={styles.button} onClick={fetchData}>

                        Realizar búsqueda
                        
                    </button>
                </div>
                
            </div>

            
        </div>
    )
    
}