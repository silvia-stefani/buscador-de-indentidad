import { useState } from 'react'

import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'

import styles from './App.module.scss';

function App() {

  const [show, setShow] = useState('none')
  const [hide, setHide] = useState('block')

  return (
    <div className={styles.App}>

        <Form hide={hide} showDash={() => {setShow('block'), setHide('none')}} />
        <Dashboard show={show}/>
    </div>
  )
}

export default App
