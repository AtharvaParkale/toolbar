import React, { useEffect, useState } from "react";
import "./Calculators.css";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SimpleCalculator from "./SimpleCalculator/SimpleCalculator";
import CompoundIntCalculator from "./CompoundIntCalculator/CompoundIntCalculator";
import SimpleIntCalculator from "./SimpleIntCalculator/SimpleIntCalculator";
import DaysCalculator from "./DaysCalculator/DaysCalculator";
import GSTCalculator from "./GstCalculator/GSTCalculator";
import GSTInputCalculator from "./GSTInputCalculator/GSTInputCalculator";

function Calculators({ openCalculator, setOpenCalculators }) {
  const [calculatorType, setCalculatorType] = useState("basic");

  const handleChangeCalculator = (e) => {
    console.log(calculatorType);
    setCalculatorType(e);
  };

  const closeTheCalculatorSection = () => {
    setOpenCalculators(false);
  };

  useEffect(() => {
    // Do something with the count variable
    // console.log("Open Calculator :", openCalculator);
  }, [openCalculator]);
  return (
    <Box
      className="calculators-container"
      sx={{
        // border: "2px solid black",
        width: "90%",
        height: "95%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Box
        className="calculators-close-container"
        sx={{
          // border: "2px solid black",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          marginBottom: "2vh",
        }}
      >
        <span>Calculators</span>
        <CloseIcon
          fontSize="3px"
          onClick={() => {
            closeTheCalculatorSection();
          }}
        />
      </Box>
      <Box
        className="calculators-options-container"
        sx={{
          // border: "2px solid black",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Box
          className="calculators-options-set-one"
          sx={{
            // border: "2px solid black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ToggleButtonGroup
            color="primary"
            value={calculatorType}
            exclusive
            onChange={(e) => {
              handleChangeCalculator(e.target.value);
            }}
            aria-label="Platform"
            sx={{
              // border: "2px solid black",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ToggleButton
              value="basic"
              sx={{
                width: "33.40%",
                fontSize: "0.7rem",
                fontWeight: "600",
              }}
            >
              Basic
            </ToggleButton>
            <ToggleButton
              value="gst"
              sx={{
                width: "33.40%",
                fontSize: "0.7rem",
                fontWeight: "600",
              }}
            >
              GST
            </ToggleButton>
            <ToggleButton
              value="gstInput"
              sx={{
                width: "33.40%",
                fontSize: "0.7rem",
                fontWeight: "600",
              }}
            >
              GST Input
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          className="calculators-options-set-two"
          sx={{
            // border: "2px solid black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ToggleButtonGroup
            color="primary"
            value={calculatorType}
            exclusive
            onChange={(e) => {
              handleChangeCalculator(e.target.value);
            }}
            aria-label="Platform"
            sx={{
              // border: "2px solid black",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ToggleButton
              value="days"
              sx={{
                width: "33.40%",
                fontSize: "0.7rem",
                fontWeight: "600",
              }}
            >
              Days
            </ToggleButton>
            <ToggleButton
              value="simple"
              sx={{
                width: "33.40%",
                fontSize: "0.7rem",
                fontWeight: "600",
              }}
            >
              Simple
            </ToggleButton>
            <ToggleButton
              value="compound"
              sx={{
                width: "33.40%",
                fontSize: "0.7rem",
                fontWeight: "600",
              }}
            >
              Compound
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Box
        className="calculators-body-container"
        sx={{
          // border: "2px solid black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "scroll",
        }}
      >
        {calculatorType === "basic" ? (
          <SimpleCalculator />
        ) : calculatorType === "gst" ? (
          <GSTCalculator />
        ) : calculatorType === "gstInput" ? (
          <GSTInputCalculator />
        ) : calculatorType === "days" ? (
          <DaysCalculator />
        ) : calculatorType === "simple" ? (
          <SimpleIntCalculator />
        ) : calculatorType === "compound" ? (
          <CompoundIntCalculator />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Calculators;
