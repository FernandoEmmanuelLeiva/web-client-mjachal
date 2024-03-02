import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, CardMedia } from '@mui/material';
import BannerComponent from '../banner/banner.component';
import Header from '../header.component';

const LandingPage: React.FC<any> = (props) => {
    return (
        <div>
          <Header/>


        <BannerComponent/>
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h2" component="h1" gutterBottom>
                     Novedades
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Mantente informado con las últimas noticias de Jachal
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
