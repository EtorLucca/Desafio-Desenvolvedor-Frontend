import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "../css/style.css";

function IndexToggleButton({ onChange }) {
  const [indexType, setIndexType] = useState("pos");

  const handleChange = async(event, newIndex) => {
    setIndexType(newIndex);
    onChange(newIndex);
  };

  return (
    <ToggleButtonGroup
      id="index"
      className="toggleButton"
      value={indexType}
      exclusive={true}
      onChange={handleChange}
      color="warning"
      sx={{
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <ToggleButton
        value="pre"
        sx={{
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px",
          marging: "0",
          width: "30%",
        }}
      >
        Pré
      </ToggleButton>
      <ToggleButton
        value="pos"
        sx={{
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px",
          marging: "0",
          width: "30%",
        }}
      >
        Pós
      </ToggleButton>
      <ToggleButton
        value="ipca"
        sx={{
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px",
          marging: "0",
          width: "40%",
        }}
      >
        Fixado
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default IndexToggleButton;
