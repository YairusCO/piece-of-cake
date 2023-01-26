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
import butter from '../../../../assets/img/butter.png'
import eggs from '../../../../assets/img/eggs.svg'
import condensedMilk from '../../../../assets/img/condensed-milk.svg'
import wheat from '../../../../assets/img/wheat.svg'
import suger from '../../../../assets/img/suger.svg'
const Ingredientes = ({ product, t, addToShoppingList, key }) => {
	const { item, imgIdx, price } = product
	const getImg = (idx) => [butter, eggs, condensedMilk, wheat, suger][idx]

	return (
		<Grid className="ingredientes" data-testid="Ingredientes" key={key}>
			<Card>
				<CardHeader title={t(`add.${item}`)} />
				<CardMedia component="img" height="174" image={getImg(imgIdx)} alt="" />
				<Typography>{price}$</Typography>
				<CardActions>
					<Button
						size="large"
						color="primary"
						onClick={() => {
							addToShoppingList(product)
						}}
					>
						<span>+</span>
						{t('add.add')}
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default Ingredientes
