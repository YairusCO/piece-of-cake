import { Grid, Typography } from "@mui/material";
import React from "react";
import { list } from "./list.json";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
const Ingredientes = () => {
  return (
    <Grid className="ingredientes" data-testid="Ingredientes">
      <Card>
        <CardHeader>
          <Typography>CardHeader</Typography>
        </CardHeader>
      </Card>
    </Grid>
  );
};

export default Ingredientes;
