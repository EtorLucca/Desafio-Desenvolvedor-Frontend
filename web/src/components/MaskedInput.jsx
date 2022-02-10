import React from "react";
import InputMask from "react-input-mask";
import "../css/style.css";

const MaskedInput = ({ value, onChange, name, mask }) => {
  function handleChange(e) {
    onChange({
      ...e,
      target: {
        ...e.target,
        name,
        value: e.target.value,
      },
    });
  }

  return (
    <InputMask
      name={name}
      mask={mask}
      value={value}
      onChange={handleChange}
      inputMode="numeric"
      className="textField"
    />
  );
};

export default MaskedInput;
