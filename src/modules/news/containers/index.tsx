import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Chip } from '@mui/material';

const newsItems = [
    {
        title: "Título de la Noticia 1",
        subtitle: "Subtítulo de la noticia 1",
        description: "Descripción detallada de la noticia 1. Este texto ofrece una visión más completa sobre el tema tratado.",
        tags: ["Tag1", "Tag2"],
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        title: "Título de la Noticia 2",
        subtitle: "Subtítulo de la noticia 2",
        description: "Descripción detallada de la noticia 2. Aquí se expande la información introducida por el título y el subtítulo.",
        tags: ["Tag3", "Tag4"],
        imageUrl: "https://via.placeholder.com/150",
    },
    // Agrega más noticias según sea necesario
];

function NewsSection() {
    return (
        <Grid container spacing={2}>
            {newsItems.map((news, index) => (
                <Grid item xs={12} key={index}>
                    <Card>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {news.title}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" color="text.secondary">
                                        {news.subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {news.description}
                                    </Typography>
                                    <div style={{ marginTop: '10px' }}>
                                        {news.tags.map((tag, index) => (
                                            <Chip label={tag} key={index} style={{ marginRight: '5px' }} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Grid>
                            <Grid item xs={4}>
                                <CardMedia
                                    component="img"
                                    image={news.imageUrl}
                                    alt={news.title}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default NewsSection;
