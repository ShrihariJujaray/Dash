import { Box, Typography, Autocomplete, TextField, Paper } from "@mui/material";

const regions = ["North", "South", "East", "West"];
const departments = ["HR", "Finance", "Engineering", "Marketing"];
const offices = ["Hyderabad", "Delhi", "Mumbai", "Chennai"];

export default function FilterBox() {
  return (
    <Paper>
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: "0.75rem",
        padding: "0.75rem 1rem",
        width: "auto",
        mt: "1rem",
      }}
    >
      {/* Left Text */}
      <Typography variant="body2" sx={{ fontSize: "1rem", color: "#e7dbdbff" }}>
        Peak Load Detail Table View
      </Typography>

      {/* Right Dropdowns */}
      <Box sx={{ display: "flex", gap: "1rem" }}>
        {/* Region */}
        <Box>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.75rem", mb: "0.2rem", display: "block" }}
          >
            Region
          </Typography>
          <Autocomplete
            size="small"
            options={regions}
            sx={{
              width: "10rem",
              "& .MuiOutlinedInput-root": {
                padding: "0 6px",
                fontSize: "0.8rem",
                color: "#f2f4efff",
                "& .MuiInputBase-input": {
                  padding: "4px 6px", // reduce internal input padding
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#999",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#333",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1976d2", // focus color
              },
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select" />
            )}
          />
        </Box>

        {/* Department */}
        <Box>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.75rem", mb: "0.2rem", display: "block" }}
          >
            Department
          </Typography>
          <Autocomplete
            size="small"
            options={departments}
            sx={{
              width: "10rem",
              "& .MuiOutlinedInput-root": {
                padding: "0 6px",
                fontSize: "0.8rem",
                color: "#f2f4efff",
                "& .MuiInputBase-input": {
                  padding: "4px 6px",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#999",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#333",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1976d2",
              },
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select" />
            )}
          />
        </Box>

        {/* Office */}
        <Box>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.75rem", mb: "0.2rem", display: "block" }}
          >
            Office
          </Typography>
          <Autocomplete
            size="small"
            options={offices}
            sx={{
              width: "10rem",
              "& .MuiOutlinedInput-root": {
                padding: "0 6px",
                fontSize: "0.8rem",
                color: "#f2f4efff",
                "& .MuiInputBase-input": {
                  padding: "4px 6px",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#999",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#333",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1976d2",
              },
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select" />
            )}
          />
        </Box>
      </Box>
    </Box>
    </Paper>
  );
}
