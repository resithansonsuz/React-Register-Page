import React from "react";
import "../style/App.scss"

const Entries = ({label,type,name,placeholder,value,handleChange,}) => (
    
    <div className="formGroup ">
            <label className="required title">{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
          </div>
          
);
export default Entries;