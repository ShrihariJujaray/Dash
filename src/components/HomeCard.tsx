import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Paper } from "@mui/material";

type HomeCardProps = {
  title: string;
  value: string;
  dateTime: string;
};

export default function HomeCard({ title, value, dateTime }: HomeCardProps) {
  return (
    <Card sx={{ backgroundColor: "white" }}>
      <Paper>
        <CardActionArea>
          <CardContent sx={{ textAlign: "center", padding: "0.25rem" }}>
            
            {/* Title */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.75rem" }, // scales with screen
              }}
            >
              {title}
            </Typography>

            {/* Value */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.0rem" },
              }}
            >
              {value}
            </Typography>

            {/* Date */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.7rem" },
              }}
            >
              {dateTime}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Paper>
    </Card>
  );
}
