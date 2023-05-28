import React, { useEffect, useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./ToolBar.css";
import { Box, Tooltip } from "@mui/material";
import Calculators from "../AllTools/Calculators/Calculators";

function ToolBar() {
  const [openCalculators, setOpenCalculators] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  useEffect(() => {}, [openCalculators, openCalendar]);

  const handleClick = (opt) => {
    if (opt === "calculators") {
      setOpenCalculators(!openCalculators);
      setOpenCalendar(false);
    }
    if (opt === "calendar") {
      setOpenCalendar(!openCalendar);
      setOpenCalculators(false);
    }
  };

  return (
    <>
      <Box
        className="toolbar-container"
        sx={{ position: "absolute", zIndex: "50" }}
      >
        <Box className="toolbar-body" sx={{

          borderRadius:openCalendar || openCalculators ? "7px 0px 0px 7px" : "7px",
        }}>
          <Tooltip title="Calculators" placement="right">
            <CalculateIcon
              onClick={() => {
                handleClick("calculators");
              }}
              sx={{
                fontSize: 25,
                cursor: "pointer",
                marginTop: "2vh",
                color: openCalculators ? "#6ab7ff" : "white",
              }}
            />
          </Tooltip>

          <Tooltip title="Calendar" placement="right">
            <CalendarMonthIcon
              onClick={() => {
                handleClick("calendar");
              }}
              sx={{
                fontSize: 25,
                cursor: "pointer",
                marginTop: "4vh",
                color: openCalendar ? "#6ab7ff" : "white",
              }}
            />
          </Tooltip>
        </Box>

        <Box
          className="opened-component-holder"
          sx={{
            // border: "2px solid green",
            height: "87vh",
            width:openCalendar || openCalculators ? "350px" : "0px",
            transition: "width 0.3s",
            padding:"3vh 3vh 3vh 0vh",
          }}
        >
          <Box
            sx={{
              // border: "2px solid red",
              width: openCalculators ? "350px" : "0px",
              height: "87vh",
              transition: "width 0.3s",
              position:"absolute",
              borderRadius:"0px 7px 7px 0px",
              boxShadow:"2px 2px 20px #00000085",
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            {openCalculators && 
            <>
            <Calculators/>
            </>}
          </Box>

          <Box
            sx={{
              // border: "2px solid red",
              width: openCalendar ? "350px" : "0px",
              height: "87vh",
              transition: "width 0.3s",
              position:"absolute",
              borderRadius:"0px 7px 7px 0px",
              boxShadow:"2px 2px 20px #00000085"
            }}
          >
            {openCalendar && <>Calendar</>}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ToolBar;
