import React from 'react';
import "../css/input.css"

const Input = ({ placeholder, name, onChange  }) => {
  return <input 
          className='input' 
          type="text" 
          placeholder={placeholder} 
          name={name} 
          onChange={onChange} 
        />;
};

export default Input;
