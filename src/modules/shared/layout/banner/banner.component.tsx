import React from 'react';
import { CardMedia, Box, Card } from '@mui/material';
import { AspectRatio } from '@mui/icons-material';

function BannerComponent() {
    return (
        <div>
            {/* <Box sx={{ position: 'relative', width: '100%', height: 0, maxHeight: 100, paddingTop: '56.25%' }}> */}
                <Card sx={{ maxHeight: 500 }}> {/* Ajusta estas dimensiones según necesites */}
                    <CardMedia
                        component="video"
                        image="./banner.mp4" // Sustituye esto por la ruta de tu video
                        title="Video Banner"
                        style={{ height: '100%', width: '100%' }} // Asegura que el video llene el espacio del Card

                        autoPlay
                        loop
                        muted // Recomendado para no interferir con la experiencia del usuario
                    />
                </Card>
            {/* </Box> */}
        </div>
    );
}

export default BannerComponent;
