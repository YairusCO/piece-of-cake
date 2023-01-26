import React from 'react'
import Ingredients from './Ingredientes'
import { Button, Grid, Typography } from '@mui/material'
import ItemList from '../ItemList'
import { RECIPE } from '../../../util/routes'
import history from '../../../services/history'

const SelectIngredient = ({ products, addToShoppingList }) => {
	return (
		<div className="select-ingredient">
			<Grid className="select-title-grid">
				<Typography className="select-title">Add Item To Bake</Typography>
			</Grid>
			<Grid container>
				<Grid item container xs={3} className="added-list">
					<ItemList />
					<Grid className="nxt-btn">
						<Button
							onClick={() => {
								history.push(RECIPE)
							}}
						>
							next
						</Button>
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
