import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

  return (
    <>
      <Card sx={{ width: "100%" }}>
        {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Current-State: {condition}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature(f): {tempInF} || Temperature: {tempInC}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity: {humidity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wind: {wind}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={getReal}>
            Get Current Weather
          </Button>
          <Button size="small" onClick={getReal}>
            Get Forecast Weather
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
