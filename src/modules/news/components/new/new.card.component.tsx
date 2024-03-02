import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Chip, Stack, Grid } from '@mui/material';

const NewsCardComponent = ({ title, subtitle, description, tags, imageUrl }: any) => {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="text.secondary">
                            {subtitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <div style={{ marginTop: '10px' }}>
                            {tags.map((tag:string, index: number) => (
                                <Chip label={tag} key={index} style={{ marginRight: '5px' }} />
                            ))}
                        </div>
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt={title}
                        style={{ width: '100%', height: '100%' }}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default NewsCardComponent;
