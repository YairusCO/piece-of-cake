import React from "react";
import { Grid, Typography, CardActions,Card ,CardHeader, CardMedia, CardContent, Button} from "@mui/material";

import img from '../../../../assets/bake.jpg'
const Ingredientes = ({product, idx, t}) => {
  const {item}=product
  // console.log(product);
  return (
    <Grid className="ingredientes" data-testid="Ingredientes">
      <Card>
        <CardHeader title={t(`add.${product.item}`)}/>
        {/* <CardHeader title='hello'/> */}
        <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
       <CardActions>
        <Button size="large" color="primary">
          {t('add.add')}
        </Button>
      </CardActions>
      </Card>
    </Grid>
  );
};

export default Ingredientes;
