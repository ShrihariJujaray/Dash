import Grid from "@mui/material/Grid"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const HomeR2 = () => {
  return (
    <Grid container spacing={2} mt={2} sx={{ width: "100%" }}>
      <Grid size={4}>
        <Card sx={{ height: { xs: "15vh", md: "40vh" } }}>
          <CardContent sx={{ textAlign: "center", p: 1 }}>
            <Typography
              variant="h6"
              fontSize={{ xs: "0.9rem", md: "1.1rem", lg: "1.3rem" }}
            >
              Box 1
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={4}>
        <Card sx={{ height: { xs: "15vh", md: "40vh" } }}>
          <CardContent sx={{ textAlign: "center", p: 1 }}>
            <Typography
              variant="h6"
              fontSize={{ xs: "0.9rem", md: "1.1rem", lg: "1.3rem" }}
            >
              Box 2
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={4}>
        <Card sx={{ height: { xs: "15vh", md: "40vh" } }}>
          <CardContent sx={{ textAlign: "center", p: 1 }}>
            <Typography
              variant="h6"
              fontSize={{ xs: "0.9rem", md: "1.1rem", lg: "1.3rem" }}
            >
              Box 3
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeR2;
