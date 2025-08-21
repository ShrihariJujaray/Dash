import HomeCard from "./HomeCard";
import Grid from "@mui/material/Grid";

const HomeR1 = () => {
  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      <Grid size="grow">
        <HomeCard title="KSI Peak" value="14 GW" dateTime="2/3/2025 7:00:00 PM" />
      </Grid>
      <Grid size="grow">
        <HomeCard title="Top Contributing Region" value="14 GW" dateTime="2/3/2025 7:00:00 PM" />
      </Grid>
      <Grid size="grow">
        <HomeCard title="Top Contributing Department" value="14 GW" dateTime="2/3/2025 7:00:00 PM" />
      </Grid>
      <Grid size="grow">
        <HomeCard title="Top Contributing Office" value="14 GW" dateTime="2/3/2025 7:00:00 PM" />
      </Grid>
      <Grid size="grow">
        <HomeCard title="Top contributing Customer Segment" value="14 GW" dateTime="2/3/2025 7:00:00 PM" />
      </Grid>
    </Grid>
  );
};

export default HomeR1;
