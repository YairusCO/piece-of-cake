import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Ingredients from './Ingredientes'
import list from './list.json'
import ItemList from '../ItemList'

const SelectIngredient = () => {
	return (
		<div className="select-ingredient">
			<Typography className="select-title"> add item to bake</Typography>
			<Grid container>
				<Grid item container xs={3} className="added-list">
					<ItemList />
					<Grid>
						<Button>next</Button>
					</Grid>
				</Grid>
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
