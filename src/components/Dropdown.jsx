import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css"
import React from "react";
import 'material-symbols';

  export const Dropdown = () => {
    const options = [
      { value: "p41", label: "P-41" },
      { value: "p42", label: "P-42" },
      { value: "p31", label: "P-31" },
      { value: "p32", label: "P-32" },
      { value: "p21", label: "P-21" },
      { value: "p22", label: "P-22" },
      { value: "p11", label: "P-11" },
    ];
    const customStyles = {
      option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "#212529" : "#fff",
        backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
      }),
  
      control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#212529",
        padding: "10px",
        border: "none",
        boxShadow: "none",
      }),
      singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };
  return(
    <div className="container">
    <div className="mt-5 w-50 text-light">
      <Select options={options} styles={customStyles}/>
    </div>
  </div>
  );

};

export default Dropdown
