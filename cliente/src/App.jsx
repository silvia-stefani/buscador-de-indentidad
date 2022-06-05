import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import styles from './App.module.scss';

import Home from './Home/Home';
import Form from './components/pages/Form/Form'
import Dashboard from './components/pages/Dashboard/Dashboard';
import DIGIdentidad from './components/pages/Dashboard/DIGIdentidad/DIGIdentidad';
import Modal from './components/Modal/Modal';

import { SERVER_URL } from "./constants/constants";
import {  useNavigate} from "react-router-dom";
import ControlPanel from './components/pages/Dashboard/ControlPanel/ControlPanel';

function App() {
  
  const [returndata, setReturndata] = useState({});
  let navigate = useNavigate();

  const fetchData = async (values) => {
    //console.log(values);
    try {
        navigate("/app/loading")
        const finalurl = SERVER_URL + "/getData/";
        const res = await fetch(finalurl, {
          method: 'POST', 
          headers:{
              "Content-Type": "application/json",
          },
          body: JSON.stringify(values)
        });
        
        const newdata = await res.json();
        console.log("NEWDATA:", newdata)
        setReturndata(newdata);
        navigate("/app/dashboard")
        
    } catch (err) {
        console.log("No se ha podido acceder al api.");
        console.log(err);
    }
}

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/app/loading" element={<Modal emoji={true} width="10rem" type="loading" label="Cargando..." />} />

        <Route path="/" element={<Form fetchData={fetchData}/>} />
        <Route path="/app/dashboard" element={<Dashboard returndata={returndata}/>} />
        <Route path="/app/DIGIdentity" element={<DIGIdentidad/>} />
      </Routes>  
    </div>
  )
}

export default App
