import { Grid, Typography } from '@mui/material'
import React from 'react'
import Ingredients from './Ingredientes'
import list from './list.json'

const SelectIngredient = () => {
	return (
		<div>
			<Typography> add item to bake</Typography>
			<Grid container>
				<Grid item xs={3} className="added-list"></Grid>
				<Grid
					item
					xs={9}
					className="select-ingredient"
					data-testid="SelectIngredient"
					container
				>
					{list.product?.map((product, idx) => {
						return <Ingredients product={product} idx={idx} key={idx} />
					})}
				</Grid>
			</Grid>
		</div>
	)
}

export default SelectIngredient
