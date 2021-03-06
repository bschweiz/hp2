import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Typography variant="h3" color="inherit">
                    Happy Plants Redux
                </Typography>
            </AppBar>
        </div>
    )
}

export default NavBar;