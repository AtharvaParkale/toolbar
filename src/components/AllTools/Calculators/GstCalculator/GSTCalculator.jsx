import React, { useEffect, useState } from "react";
import "./GSTCalculator.css";
import { BiRupee } from "react-icons/bi";
import { BsPercent } from "react-icons/bs";
import { Box } from "@mui/material";

function GSTCalculator() {
  const [showProfit, setShowProfit] = useState(false);
  const [displayGST, setDisplayGST] = useState(0);
  const [gstAmt, setGstAmt] = useState(0);
  const [gstRate, setGstRate] = useState(5);
  const [profit, setProfit] = useState(0);
  const [totalGST, setTotalGst] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [gstType, setGstType] = useState(true);
  const [profitPercentage, setProfitPercentage] = useState(0);

  const calculateGST = (
    gst,
    pro,
    rate,
    display,
    totalGST,
    totalProfit,
    profitP
  ) => {
    if (gstType) {
      // console.log("This is exclusive !")
      const gstCalculated =
        parseFloat(gstAmt) + (parseFloat(gstAmt) * parseFloat(gstRate)) / 100;
      const gstWithProfit =
        (parseFloat(gstCalculated) * parseFloat(profit)) / 100;
      setDisplayGST(
        parseFloat(
          parseFloat(gstCalculated) + parseFloat(gstWithProfit)
        ).toFixed(2)
      );

      const totalG = (rate * gst) / 100 + (pro * ((rate * gst) / 100)) / 100;
      setTotalGst(parseFloat(totalG).toFixed(2));

      const totalP = display - gst - totalG;
      setTotalProfit(parseFloat(totalP).toFixed(2));
    } else {
      const gstCalculated = parseFloat(gstAmt);
      const gstWithProfit =
        parseFloat(gstCalculated) +
        (parseFloat(profit) * parseFloat(gstCalculated)) / 100;
      setDisplayGST(parseFloat(gstWithProfit).toFixed(2));

      const totalG =
        parseFloat(display) - parseFloat(display) * (100 / (100 + rate));
      setTotalGst(parseFloat(totalG).toFixed(2));

      // eslint-disable-next-line eqeqeq
      if (profit != 0) {
        const totalP =
          parseFloat(display) - parseFloat(totalGST) - parseFloat(gst);
        setTotalProfit(parseFloat(totalP).toFixed(2));
      }

      const percentP = parseFloat((totalProfit / gst) * 100).toFixed(2);
      setProfitPercentage(parseFloat(percentP).toFixed(2));
    }
  };

  useEffect(() => {
    calculateGST(
      gstAmt,
      profit,
      gstRate,
      displayGST,
      totalGST,
      totalProfit,
      profitPercentage
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    gstAmt,
    profit,
    gstRate,
    displayGST,
    totalGST,
    totalProfit,
    profitPercentage,
  ]);
  return (
    <Box
      sx={{
        // border: "1px solid black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className="calculator_innercontainer"
        sx={{
        //   border: "2px solid black",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          className="calculator_inputs"
          sx={{
            // border: "2px solid black",
          }}
        >
          <Box
            className="gst_option"
            sx={{
            //   border: "2px solid black",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "4vh",
              fontWeight: "500",
            }}
          >
            <Box
              sx={{
                // border: "2px solid black",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="exclusive"
                name="gst_type"
                value="exclusive"
                onChange={(e) => {
                  setGstType(true);
                }}
              />
              <label htmlFor="exclusive">Exclusive of GST</label>
            </Box>
            <Box
              sx={{
                // border: "2px solid black",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                id="inclusive"
                name="gst_type"
                value="inclusive"
                onChange={(e) => {
                  setGstType(false);
                }}
              />
              <label htmlFor="inclusive">Inclusive of GST</label>
            </Box>
          </Box>
          <Box
            className="calculator_takeinputs"
            sx={{
            //   border: "2px solid black",
              fontWeight: "600",
              color: "#44475b",
              fontSize: "14px",
            }}
          >
            <p>
              <span>Cost of Goods / Services </span>
            </p>
            <Box
              className="takeinput takeinput_one"
              sx={{
                // border: "2px solid black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BiRupee size={20} />
              <input
                type="number"
                name="gst"
                id="gstval"
                placeholder="Enter Amount Here"
                onChange={(e) => {
                  setGstAmt(parseFloat(e.target.value));
                  calculateGST(
                    gstAmt,
                    profit,
                    gstRate,
                    displayGST,
                    totalGST,
                    totalProfit,
                    profitPercentage
                  );
                }}
              />
            </Box>
            {showProfit ? (
              <Box className="show_profit">
                {/* {gstType ? */}
                <p
                  onClick={() => {
                    showProfit ? setShowProfit(true) : setShowProfit(true);
                  }}
                >
                  + Add Profit Ratio
                </p>
                <Box></Box>
                {/* } */}
              </Box>
            ) : (
              <>
                <p>
                  <span>Profit Ratio</span>
                </p>
                <Box
                  className="takeinput takeinput_two"
                  sx={
                    {
                      // border: "2px solid black",
                    }
                  }
                >
                  <input
                    type="number"
                    name="profit"
                    id="profitpercentage"
                    placeholder="Enter Profit Ratio Here"
                    onChange={(e) => {
                      setProfit(e.target.value);
                      calculateGST(
                        gstAmt,
                        profit,
                        gstRate,
                        displayGST,
                        totalGST,
                        totalProfit,
                        profitPercentage
                      );
                    }}
                  />
                  <BsPercent size={20} />
                </Box>
              </>
            )}
          </Box>
          <Box
            className="calculator_rates"
            sx={{
            //   border: "2px solid black",
              fontWeight: "600",
              color: "#44475b",
              fontSize: "14px",
            }}
          >
            <p>
              <span>Select GST Rate</span>
            </p>
            <Box
              className="gst_rates"
              sx={{
                // border: "2px solid black",
              }}
            >
              <button
                onClick={(e) => {
                  setGstRate(3);
                  calculateGST(
                    gstAmt,
                    profit,
                    gstRate,
                    displayGST,
                    totalGST,
                    totalProfit,
                    profitPercentage
                  );
                }}
                className={gstRate === 3 ? "button_active" : "button_inactive"}
              >
                3%
              </button>
              <button
                onClick={(e) => {
                  setGstRate(5);
                  calculateGST(
                    gstAmt,
                    profit,
                    gstRate,
                    displayGST,
                    totalGST,
                    totalProfit,
                    profitPercentage
                  );
                }}
                className={gstRate === 5 ? "button_active" : "button_inactive"}
              >
                5%
              </button>
              <button
                onClick={(e) => {
                  setGstRate(12);
                  calculateGST(
                    gstAmt,
                    profit,
                    gstRate,
                    displayGST,
                    totalGST,
                    totalProfit,
                    profitPercentage
                  );
                }}
                className={gstRate === 12 ? "button_active" : "button_inactive"}
              >
                12%
              </button>
              <button
                onClick={(e) => {
                  setGstRate(18);
                  calculateGST(
                    gstAmt,
                    profit,
                    gstRate,
                    displayGST,
                    totalGST,
                    totalProfit,
                    profitPercentage
                  );
                }}
                className={gstRate === 18 ? "button_active" : "button_inactive"}
              >
                18%
              </button>
              <button
                onClick={(e) => {
                  setGstRate(28);
                  calculateGST(
                    gstAmt,
                    profit,
                    gstRate,
                    displayGST,
                    totalGST,
                    totalProfit,
                    profitPercentage
                  );
                }}
                className={gstRate === 28 ? "button_active" : "button_inactive"}
              >
                28%
              </button>
            </Box>
          </Box>
        </Box>
        <Box
          className="calculator_display"
          sx={{
            // border: "2px solid black",
          }}
        >
          <Box className="image_holder">
            <Box
              className="display_price"
              sx={{
                // border: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop:"4vh",
                marginBottom:"1vh"
              }}
            >
              <Box
                sx={{
                //   border: "2px solid black",
                  fontWeight: "600",
                  color: "#44475b",
                  fontSize: "14px",
                }}
              >
                Total selling price
              </Box>
              <Box
                sx={{
                //   border: "2px solid black",
                  fontWeight: "600",
                  color: "#44475b",
                  fontSize: "14px",
                }}
              >
                ₹{" "}
                {isNaN(parseFloat(displayGST))
                  ? parseFloat(0).toFixed(2)
                  : parseFloat(displayGST).toFixed(2)}
              </Box>
            </Box>

            <Box className="display_price_inner" sx={{}}>
              <Box
                className="total_profit"
                sx={{
                //   border: "2px solid red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom:"1vh"
                }}
              >
                <Box
                  sx={{
                    // border: "2px solid black",
                    fontWeight: "600",
                    color: "#44475b",
                    fontSize: "14px",
                  }}
                >
                  Total amount
                </Box>
                <Box sx={{
                    // border: "2px solid black",
                    fontWeight: "600",
                    color: "#44475b",
                    fontSize: "14px",
                  }}>
                  ₹{" "}
                  {isNaN(Math.abs(totalProfit).toFixed(2))
                    ? parseFloat(0).toFixed(2)
                    : Math.abs(totalProfit).toFixed(2)}
                </Box>
              </Box>
              <Box
                className="total_gst"
                sx={{
                //   border: "2px solid red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom:"1vh"
                }}
              >
                <Box
                  sx={{
                    // border: "2px solid black",
                    fontWeight: "600",
                    color: "#44475b",
                    fontSize: "14px",
                  }}
                >
                  Total gst
                </Box>

                <Box sx={{
                    // border: "2px solid black",
                    fontWeight: "600",
                    color: "#44475b",
                    fontSize: "14px",
                  }}>
                  ₹ {isNaN(totalGST) ? parseFloat(0).toFixed(2) : totalGST}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GSTCalculator;
