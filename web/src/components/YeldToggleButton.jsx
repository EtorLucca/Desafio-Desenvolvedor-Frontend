import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "../css/style.css";

function YieldToggleButton({ onChange }) {
  const [yieldType, setYieldType] = useState("bruto");
  
  const handleChange = async(event, newYield) => {
    setYieldType(newYield);
    onChange(newYield);
  };

  return (
    <ToggleButtonGroup
      id="yield"
      className="toggleButton"
      value={yieldType}
      exclusive={true}
      onChange={handleChange}
      color="warning"
      sx={{
        borderRadius: "8px",
        width: "90%",
      }}
    >
      <ToggleButton
        value="bruto"
        sx={{
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px",
          marging: "0",
          width: "50%",
        }}
      >
        Bruto
      </ToggleButton>
      <ToggleButton
        value="liquido"
        sx={{
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px",
          marging: "0",
          width: "50%",
        }}
      >
        Líquido
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default YieldToggleButton;
