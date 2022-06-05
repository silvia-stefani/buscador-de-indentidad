import React, {useState} from "react";
import { ArrowLeft, Eye, X, Gear, PlusCircle, CheckCircle, Trash, Pen } from "phosphor-react";

import styles from "./Button.modal.scss";

export default function Button({

  icon,
  label,
  type, 
  onPress
  
  }) {

    const buttonType = `btn-${type}`;

    const setIcon =
    icon == "back" ? <ArrowLeft/> : icon == "see" ? <Eye/> : 
    icon == "close" ? <X/> : icon == "settings" ? <Gear/> : 
    icon == "add" ? <PlusCircle/> : icon == "check" ? <CheckCircle/>:
    icon == "trash" ? <Trash/> : icon == "pen" ? <Pen/> : null


    return (
      <button  className={buttonType} onClick={onPress} >
        { setIcon }
        { label }
      </button>
    )
    
}