import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import "./card.css";

export default function MediaCard({
  setGetReal,
  condition,
  tempInC,
  tempInF,
  humidity,
  wind,
}) {
  const getReal = () => {
    setGetReal(true);
  };

  const theme = createTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 2,
    },
  });

  theme.typography.h3 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  theme.typography.h4 = {
    fontSize: "1.5rem",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          className="card"
          sx={{
            width: "50%",
            fontSize: "20rem",
          }}
        >
          {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
          <CardContent
            sx={{
              width: "50%",
              fontSize: "20rem",
            }}
          >
            <Typography gutterBottom variant="h3" component="div">
              Current-State: {condition}
            </Typography>
            <Typography variant="h4" color="text.secondary">
              Temperature(f): {tempInF} || Temperature: {tempInC}
            </Typography>
            <Typography variant="h4" color="text.secondary">
              Humidity: {humidity}
            </Typography>
            <Typography variant="h4" color="text.secondary">
              Wind: {wind}
            </Typography>
          </CardContent>
          <CardActions sx={{ fontSize: 20 }}>
            <button className="card-Button">Get Current Weather</button>
            <button className="card-Button">Get Forecast Weather</button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
}
