import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";

// Import your actual page components
import Home from "../pages/Home";
import LoadCurve from "../pages/LoadCurve";
import LoadDurationCurve from "../pages/LoadDurationCurve";
import MonthlyPeakLoad from "../pages/MonthlyPeakLoad";
import { Paper } from "@mui/material";

export default function Navigator4Button() {
  const [selected, setSelected] = useState("home");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) setSelected(newValue);
  };

  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleChange}
        aria-label="dashboard selector"
        sx={{
          display: "flex",
          gap: 1, // spacing between buttons
          width: { xs: "100%", md: "70%", lg: "50%" },
          

          // Remove default grouping style
          "& .MuiToggleButtonGroup-grouped": {
            borderRadius: 1, // ✅ all buttons rounded
            border: "1px solid",
            borderColor: "divider",
            mx: 0, // remove overlap
          },
        }}
      >
        <Paper><ToggleButton value="home" sx={{ flex: 1 }}>Home</ToggleButton></Paper>

        <Paper><ToggleButton value="loadCurve" sx={{ flex: 1 }}>Load Curve</ToggleButton></Paper>

        <Paper><ToggleButton value="loadDuration" sx={{ flex: 1 }}>Load Duration Curve</ToggleButton></Paper>

        <Paper><ToggleButton value="monthlyPeak" sx={{ flex: 1 }}>Monthly Peak Load</ToggleButton></Paper>

      </ToggleButtonGroup>

      {/* Render selected component */}
      <Box mt={2}>
        {selected === "home" && <Home />}
        {selected === "loadCurve" && <LoadCurve />}
        {selected === "loadDuration" && <LoadDurationCurve />}
        {selected === "monthlyPeak" && <MonthlyPeakLoad />}
      </Box>
    </Box>
  );
}
