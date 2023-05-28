import React, { useState } from "react";
import "./CompoundIntCalculator.css";
import { Box, InputAdornment, OutlinedInput, Slider } from "@mui/material";

function CompoundIntCalculator() {
  const [prinAmt, setPrintAmt] = useState(100000);
  const [roi, setRoi] = useState(6);
  const [tmPeriod, setTmPeriod] = useState(5);
  const [totInt, setTotInt] = useState(33823);
  const [totAmt, setTotAmt] = useState(133823);
  const [n, setN] = useState(1);
  const [pPer, setpPer] = useState(75);
  const [iPer, setiPer] = useState(25);

  const handleChange = (principalAmt, rateOfInterest, timePeriod, n) => {
    setPrintAmt(principalAmt);
    setRoi(rateOfInterest);
    setTmPeriod(timePeriod);
    setTotInt(n);

    const totalAmount = Math.round(
      prinAmt * Math.pow(1 + roi / (n * 100), n * tmPeriod)
    );
    setTotAmt(totalAmount);

    const totalInterest = totAmt - prinAmt;
    setTotInt(totalInterest);

    const pper = Math.round((prinAmt / (totInt + prinAmt)) * 100);
    setpPer(pper);

    const iper = Math.round((totInt / (totInt + prinAmt)) * 100);
    setiPer(iper);
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
                  handleChange(e.target.value, roi, tmPeriod, n);
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
                    handleChange(prinAmt, e.target.value, tmPeriod, n);
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
                  handleChange(prinAmt, e.target.value, tmPeriod, n);
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
                    handleChange(prinAmt, roi, e.target.value, n);
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
                  handleChange(prinAmt, roi, e.target.value, n);
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box className="time-frame-container">
          <Box className="inner-time-frame-container">
            <p>Compounding frequency</p>
            <select
              className="select-tag"
              onChange={(e) => {
                handleChange(prinAmt, roi, tmPeriod, e.target.value);
              }}
            >
              <option value={1}>Annually</option>
              <option value={2}>Semi Annually</option>
              <option value={4}>Quaterly</option>
              <option value={12}>Monthly</option>
              <option value={24}>Semi Monthly</option>
              <option value={52}>Weekly</option>
              <option value={26}>Bi Weekly</option>
              <option value={365}>Daily</option>
            </select>
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

export default CompoundIntCalculator;
