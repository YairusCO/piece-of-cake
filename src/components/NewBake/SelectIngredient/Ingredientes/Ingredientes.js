import React from 'react'
import {
	Grid,
	Typography,
	CardActions,
	Card,
	CardHeader,
	CardMedia,
	Button,
} from '@mui/material'

import img from '../../../../assets/bake.jpg'
const Ingredientes = ({ product, t, handleClick }) => {
	const { item } = product
	return (
		<Grid className="ingredientes" data-testid="Ingredientes">
			<Card>
				<CardHeader title={t(`add.${item}`)} />
				<CardMedia component="img" height="194" image={img} alt="Paella dish" />
				<CardActions>
					<Button
						size="large"
						color="primary"
						onClick={() => {
							handleClick(item)
						}}
					>
						{t('add.add')}
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default Ingredientes
