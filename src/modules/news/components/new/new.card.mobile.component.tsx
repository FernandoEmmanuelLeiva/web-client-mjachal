import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Chip, Stack } from '@mui/material';

const NewsCardMobileComponent = ({ title, description, tags, imageUrl }: any) => {
    return (
        <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        {tags.map((tag: string, index: number) => (
                            <Chip key={index} label={tag} size="small" />
                        ))}
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NewsCardMobileComponent;
