import { Box, InputAdornment, OutlinedInput, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";

function SimpleIntCalculator() {
  const [prinAmt, setPrintAmt] = useState(100000);
  const [roi, setRoi] = useState(6);
  const [tmPeriod, setTmPeriod] = useState(5);
  const [totInt, setTotInt] = useState(30000);
  const [totAmt, setTotAmt] = useState(130000);

  useEffect(() => {}, [prinAmt, roi, tmPeriod, totInt, totAmt]);

  const handleChange = (principalAmt, rateOfInterest, timePeriod) => {
    setPrintAmt(principalAmt);
    setRoi(rateOfInterest);
    setTmPeriod(timePeriod);

    const totalInterest = (prinAmt * roi * tmPeriod) / 100;

    setTotInt(totalInterest);

    const totalAmount = prinAmt * (1 + roi * tmPeriod);
    setTotAmt(totalAmount);
  };
  return (
    <Box
      sx={{
        // border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          // border: "2px solid red",
          width:"100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            // border: "2px solid black",
            width: "100%",
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box className="slider-container">
            <Box className="slider-label">
              <Box className="sld-label">Principal Amount</Box>
            </Box>
            <Box className="slider-holder">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                sx={{
                  width: "100%",
                }}
                defaultValue={100000}
                type="number"
                onChange={(e) => {
                  handleChange(e.target.value, roi, tmPeriod);
                }}
              />
            </Box>
          </Box>
          <Box className="slider-container">
            <Box className="slider-label">
              <Box className="sld-label">Rate of Interest (p.a)</Box>
              <Box className="sld-input-holder">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={roi}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    handleChange(prinAmt, e.target.value, tmPeriod);
                  }}
                />
                <p>%</p>
              </Box>
            </Box>
            <Box className="slider-holder">
              <Slider
                defaultValue={6}
                aria-label="Default"
                valueLabelDisplay="auto"
                className="slider-body"
                min={0}
                max={100}
                value={roi}
                onChange={(e) => {
                  // console.log(e.target.value);
                  handleChange(prinAmt, e.target.value, tmPeriod);
                }}
              />
            </Box>
          </Box>
          <Box className="slider-container">
            <Box className="slider-label">
              <Box className="sld-label">Time Period </Box>

              <Box className="sld-input-holder">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={tmPeriod}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    handleChange(prinAmt, roi, e.target.value);
                  }}
                />
                <p>Yrs</p>
              </Box>
            </Box>
            <Box className="slider-holder">
              <Slider
                defaultValue={5}
                aria-label="Default"
                valueLabelDisplay="auto"
                className="slider-body"
                min={0}
                max={100}
                value={tmPeriod}
                onChange={(e) => {
                  // console.log(e.target.value);
                  handleChange(prinAmt, roi, e.target.value);
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box className="display-container">
          <Box className="display-tags">
            <p>Principal amount</p>
            <span>Rs {prinAmt}</span>
          </Box>
          <Box className="display-tags">
            <p>Total interest</p>
            <span>Rs {totInt}</span>
          </Box>
          <Box className="display-tags">
            <p>Total amount</p>
            <span>Rs {totAmt}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SimpleIntCalculator;
