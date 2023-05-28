import React from "react";
import Calculator from "awesome-react-calculator";
import { Box } from "@mui/material";
import "./SimpleCalculator.css"

function SimpleCalculator() {
  return (
    <Box
      sx={{
        // border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        height:"100%"
      }}
    >
      <Calculator />
    </Box>
  );
}

export default SimpleCalculator;
