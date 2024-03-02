import React from 'react';
import { CardMedia, Box, Card } from '@mui/material';
import { AspectRatio } from '@mui/icons-material';

function BannerComponent() {
    return (
        <div>
                <Card sx={{ maxHeight: 500 }}> {/* Ajusta estas dimensiones según necesites */}
                    <CardMedia
                        component="video"
                        image="./banner.mp4" // Sustituye esto por la ruta de tu video
                        title="Video Banner"
                        style={{ height: '100%', width: '100%' }} // Asegura que el video llene el espacio del Card
                        autoPlay={true}
                        loop
                        muted
                    />
                </Card>
        </div>
    );
}

export default BannerComponent;
