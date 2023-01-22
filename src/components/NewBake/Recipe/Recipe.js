import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import ItemList from '../ItemList'
import { Link } from 'react-router-dom'
import { RECIPE } from '../../../util/routes'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
const Recipe = ({ products }) => {
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
				<Box
					sx={{
						width: 500,
						maxWidth: '100%',
					}}
				>
					<TextField fullWidth label="fullWidth" id="fullWidth" />
				</Box>
			</Grid>
		</div>
	)
}

export default Recipe
