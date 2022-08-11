import { Grid } from '@mui/material'
import React from 'react'
import Ingredientes from './Ingredientes'
import list from './list.json'

const SelectIngredient = () => {
  return (
    <Grid className='select-ingredient' data-testid='SelectIngredient' container>
       {list.product?.map((product, idx) => {
          return (<Ingredientes product={product} idx={idx} key={idx}/>)})}
       
    </Grid>
  )
}

export default SelectIngredient
