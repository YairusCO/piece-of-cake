import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FolderIcon from '@mui/icons-material/Folder'
import CakeIcon from '@mui/icons-material/Cake'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/material/styles'

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}))

const ItemList = ({ removeFromShoppingList, shoppingList, t }) => {
	return (
		<Grid className="item-list" data-testid="ItemList">
			<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
				List
			</Typography>
			<Demo>
				<List>
					{Object.values(shoppingList).map((product, idx) => {
						return (
							<ListItem
								key={idx}
								secondaryAction={
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={() => {
											removeFromShoppingList(product)
										}}
									>
										<DeleteIcon />
									</IconButton>
								}
							>
								<ListItemAvatar>
									<Avatar>
										<CakeIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={t(`add.${product.item}`)} />
							</ListItem>
						)
					})}
				</List>
			</Demo>
		</Grid>
	)
}

export default ItemList
