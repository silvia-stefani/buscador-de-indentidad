import React, {useState} from "react";
import PropTypes from 'prop-types';
import { ArrowLeft, Eye, X, Gear, PlusCircle, CheckCircle, Trash, Pen } from "phosphor-react";

import "./Button.modal.scss";

export const Button = ({

  icon,
  label,
  type, 
  onPress
  
  }) => {
    //const buttonType = `btn-${type}`;

    const setIcon =
    icon == "back" ? <ArrowLeft/> : icon == "see" ? <Eye/> : 
    icon == "close" ? <X/> : icon == "settings" ? <Gear/> : 
    icon == "add" ? <PlusCircle/> : icon == "check" ? <CheckCircle/>:
    icon == "trash" ? <Trash/> : icon == "pen" ? <Pen/> : null


    return (
      <button  className={type} onClick={onPress} >
        { setIcon }
        { label }
      </button>
    )
    
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'black', 'ghost', 'lineal']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onPress: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onPress: undefined,
};
