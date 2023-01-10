import React from 'react'
import Ingredients from './Ingredientes'
import { Button, Grid, Typography } from '@mui/material'
import ItemList from '../ItemList'
import { Link } from 'react-router-dom'
import { RECIPE } from '../../../util/routes'

const SelectIngredient = ({ products, addToShoppingList }) => {
	return (
		<div className="select-ingredient">
			<Typography className="select-title">add item to bake</Typography>
			<Grid container>
				<Grid item container xs={3} className="added-list">
					<ItemList />
					<Grid>
						<Link to={RECIPE}>next</Link>
					</Grid>
				</Grid>
				<Grid
					item
					xs={9}
					className="select-ingredient"
					data-testid="SelectIngredient"
					container
				>
					{products?.map((product, idx) => {
						return <Ingredients product={product} key={idx} />
					})}
				</Grid>
			</Grid>
		</div>
	)
}

export default SelectIngredient
