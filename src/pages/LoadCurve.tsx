import Grid from "@mui/material/Grid";
import NormalGraphPaper from "../components/NormalGraphPaper";

export default function LoadCurve() {
  return (
    <Grid container spacing={2} mt={2}>
      {/* Box 1 */}
      <Grid size={{ md: 6, lg: 6 }}>
        <NormalGraphPaper></NormalGraphPaper>
      </Grid>

      {/* Box 2 */}
      <Grid size={{ md: 6, lg: 6 }}>
        <NormalGraphPaper></NormalGraphPaper>
      </Grid>

      {/* Box 3 */}
      <Grid size={{ md: 6, lg: 6 }}>
        <NormalGraphPaper></NormalGraphPaper>
      </Grid>

      {/* Box 4 */}
      <Grid size={{ md: 6, lg: 6 }}>
        <NormalGraphPaper></NormalGraphPaper>
      </Grid>
    </Grid>
  );
}
