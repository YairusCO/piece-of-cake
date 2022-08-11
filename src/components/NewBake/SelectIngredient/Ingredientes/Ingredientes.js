import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import img from '../../../../assets/bake.jpg'
const Ingredientes = ({product, idx}) => {
  // debugger
  const {item}=product
  // console.log(product);
  return (
    <Grid className="ingredientes" data-testid="Ingredientes">
      <Card>
        <CardHeader title={product.item}/>
        {/* <CardHeader title='hello'/> */}
        <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      </Card>
    </Grid>
  );
};

export default Ingredientes;
