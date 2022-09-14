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

function generate(element) {
	return [0, 1, 2].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	)
}
const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}))

const ItemList = () => {
	const [dense, setDense] = React.useState(false)
	const [secondary, setSecondary] = React.useState(false)
	return (
		<Grid className="item-list" data-testid="ItemList">
			<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
				List
			</Typography>
			<Demo>
				<List dense={dense}>
					{generate(
						<ListItem
							secondaryAction={
								<IconButton edge="end" aria-label="delete">
									<DeleteIcon />
								</IconButton>
							}
						>
							<ListItemAvatar>
								<Avatar>
									<CakeIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="item"
								secondary={secondary ? 'Secondary text' : null}
							/>
						</ListItem>
					)}
				</List>
			</Demo>
		</Grid>
	)
}

export default ItemList
