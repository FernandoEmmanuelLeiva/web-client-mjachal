import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, CardMedia } from '@mui/material';
import BannerComponent from '../banner/banner.component';

const LandingPage: React.FC<any> = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Comunidad de Jachal
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>


        <BannerComponent/>
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Mantente informado con las últimas noticias de Jachal
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Descubre más sobre el organigrama del municipio, realiza trámites en línea y conoce las últimas iniciativas del intendente.
                    </Typography>
                    <Button variant="contained" color="primary">
                        Leer más
                    </Button>
                </Box>

                {props.children}
            </Container>
        </div>
    );
}

export default LandingPage;
