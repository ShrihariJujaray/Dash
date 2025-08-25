import { Paper, Typography } from '@mui/material'


const NormalGraphPaper = () => {
  return (
    <>
    <Paper
          elevation={3}
          sx={{
            height: { md: 275, lg: 350 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 2,
          }}
        >
          <Typography variant="h6">Graph</Typography>
        </Paper></>
        
  )
}

export default NormalGraphPaper