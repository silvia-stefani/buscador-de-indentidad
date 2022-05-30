import React, {useState} from "react";
import { ArrowLeft, Eye, X, Gear, PlusCircle, CheckCircle } from "phosphor-react";

import styles from "./Button.modal.scss";

export default function Button({

  special,
  label,
  type, 
  onPress
  
  }) {

    const buttonType = `btn-${type}`;

    const setIcon =
    special == "back" ? <ArrowLeft/> : special == "see" ? <Eye/> : 
    special == "close" ? <X/> : special == "settings" ? <Gear/> : 
    special == "add" ? <PlusCircle/> : special == "check" ? <CheckCircle/> : null


    return (
      <button  className={buttonType} onClick={onPress} >
        { setIcon }
        { label }
      </button>
    )
    
}