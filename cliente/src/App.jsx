import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import styles from './App.module.scss';

import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import { SERVER_URL } from "./constants/constants";
import {  useNavigate} from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  const [returndata, setReturndata] = useState({});
  let navigate = useNavigate();

  const fetchData = async (values) => {
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
        navigate("/dashboard")
    } catch (err) {
        console.log("No se ha podido acceder al api.");
        console.log(err);
    }
}


  return (
    <div className={styles.App}>
      <Header/>
      <Routes>
        <Route path="/" element={<Form fetchData={fetchData}/>} />
        <Route path="/dashboard" element={<Dashboard returndata={returndata}/>} />
      </Routes>        
    </div>
  )
}

export default App
