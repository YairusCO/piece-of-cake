import { Grid, Typography } from '@mui/material'
import React from 'react'
import Ingredientes from './Ingredientes'
import list from './list.json'

const SelectIngredient = () => {
	return (
		<div>
			<Typography> add item to bake</Typography>
			<Grid container>
				<Grid xs={3} className="added-list"></Grid>

				<Grid
					xs={9}
					className="select-ingredient"
					data-testid="SelectIngredient"
					container
				>
					{list.product?.map((product, idx) => {
						return <Ingredientes product={product} idx={idx} key={idx} />
					})}
				</Grid>
			</Grid>
		</div>
	)
}

export default SelectIngredient
