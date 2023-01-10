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

import img from '../../../../assets/img/bake.jpg'
const Ingredientes = ({ product, t, addToShoppingList, key }) => {
	const { item } = product
	return (
		<Grid className="ingredientes" data-testid="Ingredientes" key={key}>
			<Card>
				<CardHeader title={t(`add.${item}`)} />
				<CardMedia component="img" height="194" image={img} alt="Paella dish" />
				<CardActions>
					<Button
						size="large"
						color="primary"
						onClick={() => {
							addToShoppingList(product)
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
