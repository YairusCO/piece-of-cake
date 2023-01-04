import React from 'react'
import Ingredients from '../SelectIngredient/Ingredientes'
import { Button, Grid, Typography } from '@mui/material'
import list from '../SelectIngredient/list.json'
import ItemList from '../ItemList'
import { Link } from 'react-router-dom'
import { RECIPE } from '../../../util/routes'
const Recipe = () => {
	return (
		<div className="recipe" data-testid="Recipe">
			<Typography className="select-title"> Recipe component</Typography>
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
					{list.product?.map((product, idx) => {
						return <Ingredients product={product} idx={idx} key={idx} />
					})}
				</Grid>
			</Grid>
		</div>
	)
}

export default Recipe
