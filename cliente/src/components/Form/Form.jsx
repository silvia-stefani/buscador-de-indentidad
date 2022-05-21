import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";

import styles from './Form.module.scss';

import {project} from '/src/utils/project.js'

import Input from './Input/Input';
import Dashboard from '../Dashboard/Dashboard';

import {inputInfo} from '/src/utils/inputs.js';

import { SERVER_URL } from "../../constants/constants";


export default function Form({hide}) {


    ///// Contiene y cambia los datos

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [identification, setIdentification] = useState('');
    const [other, setOther] = useState('');

    const [values, setValues] = useState({});

    const [returndata, setReturndata] = useState({});


    ////// handle click de cada input

    const handleClickName = (e) => {
        setValues({...values, name: name})
    }

    const handleClickMail = (e) => {
        setValues({...values, mail: mail})
    }
    
    const handleClickPhone = (e) => {
        setValues({...values, phone: phone})
    }

    const handleClickIdentification = (e) => {
        setValues({...values, identification: identification})
    }

    const handleClickOther = (e) => {
        setValues({...values, other: other})
    }

    const handleRemove = (key) => {
        const newValues = {...values};
        delete newValues[key];
        setValues({...newValues});
    }


    ////// función enviar datos al servidor

    const fetchData = async () => {
        try {
            const finalurl = SERVER_URL + "/getData/";
            const res = await fetch(finalurl, {
              method: 'POST', 
              headers:{
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(values)
            });
            const newdata = await res.json();
            console.log(newdata)
            setReturndata(newdata);
        } catch (err) {
            console.log("No se ha podido acceder al api.");
            console.log(err);
        }
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
                        <Input type="text" icon={inputInfo[0].icon} name={inputInfo[0].name} example={inputInfo[0].example} onChange={e => setName(e.target.value)}  onPress={() => { handleClickName() }} />
                        <Input type="text" icon={inputInfo[1].icon}  name={inputInfo[1].name} example={inputInfo[1].example} onChange={e => setMail(e.target.value)} onPress={() => { handleClickMail() }} />
                        <Input type="text" icon={inputInfo[2].icon} name={inputInfo[2].name} example={inputInfo[2].example} onChange={e => setPhone(e.target.value)} onPress={() => { handleClickPhone()}} />
                        <Input type="text" icon={inputInfo[3].icon} name={inputInfo[3].name} example={inputInfo[3].example} onChange={e => setIdentification(e.target.value)} onPress={() => { handleClickIdentification()}} />
                        <Input type="text" icon={inputInfo[4].icon} name={inputInfo[4].name} example={inputInfo[4].example} onChange={e => setOther(e.target.value)} onPress={() => { handleClickOther() }} />
                    </div>

                    <div className={styles.image_inputs}>
                        <Input type="file" />
                    </div>

                </div>
            
                <div className={styles.results}>
                    
                    <div className={styles.data_row}>
                    {Object.keys(values).map(function(key, index) {
                        let value = values[key];
                        return (
                            <div key={index} className={styles.data_in}>
                                <p className={styles.value}>{value}</p>
                                <i className={`ph-x `+ styles.delete_data} onClick={()=>handleRemove(key)}></i>
                            </div>
                        );
                    })}
                    </div>
                    <Link to="/dashboard">
                        <button className={styles.button} onClick={fetchData}>Realizar búsqueda</button>
                    </Link>
                </div>
            </div>    
        </div>
    )
}