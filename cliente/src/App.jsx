import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import styles from './App.module.scss';

import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <div className={styles.App}>

      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
        
    </div>
  )
}

export default App
