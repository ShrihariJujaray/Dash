import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";

// Import your actual page components
import Home from "../pages/Home";
import LoadCurve from "../pages/LoadCurve";
import LoadDurationCurve from "../pages/LoadDurationCurve";
import MonthlyPeakLoad from "../pages/MonthlyPeakLoad";

export default function Navigator4Button() {
  const [selected, setSelected] = useState("home");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) setSelected(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
      {/* Equal width toggle buttons */}
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleChange}
        aria-label="dashboard selector"
        fullWidth
      >
        <ToggleButton value="home">Home</ToggleButton>
        <ToggleButton value="loadCurve">Load Curve</ToggleButton>
        <ToggleButton value="loadDuration">Load Duration Curve</ToggleButton>
        <ToggleButton value="monthlyPeak">Monthly Peak Load</ToggleButton>
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
