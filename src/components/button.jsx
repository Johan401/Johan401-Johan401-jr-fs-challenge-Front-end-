import React from 'react';
import "../css/button.css"

const Button = ({ text, buttonType, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={buttonType === "submit" ? 'button' : "normalButton"}>
        {text}
        <div className="arrow-wrapper">
            <div className="arrow"></div>
        </div>
    </button>
  )
};

export default Button;
