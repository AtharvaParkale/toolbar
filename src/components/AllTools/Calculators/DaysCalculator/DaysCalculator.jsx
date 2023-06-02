import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./DaysCalculator.css";

function DaysCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0);
  const [display, setDisplay] = useState(false);
  const [include, setInclude] = useState(true);
  const [remainingDays, setRemainingDays] = useState(0);
  const [selectWeekends, setSelectWeekends] = useState("include");
  const [monthDays, setMonthDays] = useState("");

  const calculateDays = (x, y, z, w, a, r) => {
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);

    var startD = new Date(startDate);
    var endD = new Date(endDate);

    var weekendDayCount = 0;
    while (startD < endD) {
      startD.setDate(startD.getDate() + 1);
      if (startD.getDay() === 0 || startD.getDay() == 6) {
        ++weekendDayCount;
      }
    }

    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if (selectWeekends === "exclude") {
      Difference_In_Days = Difference_In_Days - weekendDayCount;
    }
    setDays(parseInt(Difference_In_Days));
    var remainingDaysW = Math.round(
      (Difference_In_Days / 7 - parseInt(Difference_In_Days / 7)) * 7
    );
    setRemainingDays(remainingDaysW);

    console.log("Weekends : " + weekendDayCount);
    console.log(selectWeekends);

    //Number of days in each month
    var dropdt = new Date(startDate);
    var pickdt = new Date(endDate);
    var result = "";
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (
      var year = dropdt.getFullYear();
      year <= pickdt.getFullYear();
      year++
    ) {
      var firstMonth = year == dropdt.getFullYear() ? dropdt.getMonth() : 0;
      var lastMonth = year == pickdt.getFullYear() ? pickdt.getMonth() : 11;
      for (var month = firstMonth; month <= lastMonth; month++) {
        var firstDay =
          year === dropdt.getFullYear() && month === firstMonth
            ? dropdt.getDate()
            : 1;
        var lastDay =
          year === pickdt.getFullYear() && month === lastMonth
            ? pickdt.getDate()
            : 0;
        var lastDateMonth = lastDay === 0 ? month + 1 : month;
        var firstDate = new Date(year, month, firstDay);
        var lastDate = new Date(year, lastDateMonth, lastDay);
        result +=
          monthNames[month] +
          ` ${firstDate.getFullYear()}` +
          " - " +
          parseInt((lastDate - firstDate) / (24 * 3600 * 1000) + 1) +
          " days" +
          "  ||  ";
      }
    }

    console.log(result);
    setMonthDays(result);
  };
  useEffect(() => {
    calculateDays(
      startDate,
      endDate,
      days,
      remainingDays,
      selectWeekends,
      monthDays
    );
  }, [startDate, endDate, days, remainingDays, selectWeekends, monthDays]);
  return (
    <Box
      sx={{
        // border: "2px solid black",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box className="dayCount_innercontainer" >
        <Box className="dayCount_innercontainer_sec">
          <Box className="startDate_container">
            <input
              type="date"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            <label>Start Date</label>
          </Box>
          <Box className="endDate_container">
            <input
              type="date"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
            <label>End Date</label>
          </Box>
        </Box>
        <Box className="calender_buttons dayCount_innercontainer_sec">
          <Box
            className="calender_controls"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              className="option-tag-holder"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                // border: "2px solid black",
                height: "6vh",
                marginBottom: "1vh",
              }}
            >
              <select
                className="optionTag optionTagOne"
                name="include_exclude"
                id="include_exclude"
                onChange={(e) => {
                  setSelectWeekends(e.target.value);
                }}
              >
                <option value="include">Include</option>
                <option value="exclude">Exclude</option>
              </select>

              <select
                className="optionTag optionTagTwo"
                name="include_exclude"
                id="select_type"
              >
                <option value="include">Weekends</option>
              </select>
            </Box>

            <Box className="checkbox_holder" sx={{
              marginBottom:"2vh"
            }}>
              <input
                type="checkbox"
                onChange={(e) => {
                  include ? setInclude(false) : setInclude(true);
                }}
              />
              <p>Include end date in calculation (1 day is added)</p>
            </Box>
          </Box>

          <button
            onClick={() => {
              calculateDays(
                startDate,
                endDate,
                days,
                remainingDays,
                selectWeekends,
                monthDays
              );
              if (startDate === "" || endDate === "") {
                console.log("Hi");
                setDisplay(false);
                alert("Enter a valid date !");
              } else if (days < 0) {
                alert("Enter a valid date !");
              } else {
                setDisplay(true);
              }
              // setDisplay(true);
            }}
          >
            Calculate Duration
          </button>
        </Box>
        {display ? (
          <Box className="display_count">
            <Box className="display_count_section1">
              <h3>Result: {include ? days : days + 1} days</h3>
              <p>
                It is {include ? days : days + 1} days from the start date to
                the end date, but not including the end date.
              </p>
              <br />
              <p id="fromDate">
                From and including : <span>{startDate}</span>
                <br />
                {include ? (
                  <>
                    To, but not including : <span>{endDate}</span>
                    <br />
                  </>
                ) : (
                  <>
                    To and including : <span>{endDate}</span>
                  </>
                )}
              </p>
              <Box className="daysInMonth">
                <h3>Monthly Breakdown :</h3>
                <p>{monthDays}</p>
              </Box>
            </Box>
            <Box className="display_count_section2">
              <h3>Alternative time units</h3>
              <p id="display_count_section2_desc">
                {include ? days : days + 1} days can be converted to one of
                these units:
              </p>
              <p id="display_count_section2_list">
                - {parseInt((include ? days : days + 1) * 86400)} seconds
                <br />- {parseInt((include ? days : days + 1) * 1440)} minutes
                <br />- {parseInt((include ? days : days + 1) * 24)} hours
                <br />- {parseInt(include ? days : days + 1)} days
                <br />- {parseInt((include ? days : days + 1) / 7)} weeks and{" "}
                {include ? remainingDays : remainingDays + 1} days
                <br />-{" "}
                {parseFloat(((include ? days : days + 1) / 365) * 100).toFixed(
                  2
                )}{" "}
                % of common year (365 years)
                <br />
              </p>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default DaysCalculator;
