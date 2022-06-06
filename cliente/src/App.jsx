import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import styles from './App.module.scss';

import Home from './Home/Home';
import Form from './App/Form/Form'
import Dashboard from './App/Dashboard/Dashboard';
import DIGIdentidad from './App/Dashboard/DIGIdentidad/DIGIdentidad';
import Modal from './components/Modal/Modal';

import { SERVER_URL } from "./constants/constants";
import {  useNavigate} from "react-router-dom";
import ControlPanel from './App/Dashboard/ControlPanel/ControlPanel';
import Trash from './App/Dashboard/Trash/Trash';

function App() {
  
  const [returndata, setReturndata] = useState({});
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  const fetchData = async (values) => {
    //console.log(values);
    try {
      setLoading(true)
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
        setLoading(false)
        navigate("/dashboard")
        
    } catch (err) {
        console.log("No se ha podido acceder al api.");
        console.log(err);
    }
}

  return (
    <div className={styles.App}>
"
      {loading ? <Modal emoji={true} width="10rem" type="loading" label="Cargando..." /> : null}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="app" element={<Form fetchData={fetchData}/>} />
        <Route path="dashboard/*" element={<Dashboard/>} >
          <Route index element={<ControlPanel returndata={returndata}/>} />
          <Route path="control" element={<ControlPanel returndata={returndata}/>} />
          <Route path="DIGIdentidad" element={<DIGIdentidad/>} />
          <Route path="papelera" element={<Trash/>} />
        </Route>
      </Routes>  
    </div>
  )
}

export default App
