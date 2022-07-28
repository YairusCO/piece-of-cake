import React from 'react'
// import logo from '../../assets/logo-gradient.svg'
import { Button, Grid, AppBar, Toolbar } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HelpDialog from './HelpDialog'
// import AccountMenu from './AccountMenu'

const Header = ({
  // isHelpDialogModalOpen,
  // toggleHelpDialogOpenState,
  // logout,
  // userInfo,
  // userSwitch,
  // doesUserAuthenticated,
}) => {
  return (
    <AppBar className='header-strip' data-testid='Header'>
      <Toolbar className='tool-bar'>
        <Grid edge='start' className='log-container'>
          logo
          {/* <a href={HOME}>
            <img className='logo' src={logo} alt='vesstto-logo' />
          </a> */}
        </Grid>
        <Grid container className='right-section' edge='end'>
          <Button
            className='help-btn'
          
          >
            <HelpOutlineIcon />
          </Button>
          
        </Grid>
      </Toolbar>
      {false && <HelpDialog />}
    </AppBar>
  )
}

export default Header
