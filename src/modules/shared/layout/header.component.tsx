import * as React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';

const Logo = styled('img')({
    height: 64, // example height for the logo
    marginRight: 16, // equivalent to theme.spacing(2)
    borderRadius: 100,
    marginTop: 5,
    marginBottom: 5
    // Add more styles if needed
});

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Logo src="./jlogo.jpeg" alt="Logo" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Municipalidad de San Jose de Jáchal
                </Typography>
                {/* Additional toolbar items */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
