import React from 'react';
import { Grid } from '@mui/material';
import newsMock from '../../../../mocks/news.json'
import NewsCardComponent from '../components/new/new.card.component';
import NewsCardMobileComponent from '../components/new/new.card.mobile.component';

const NewsSection: React.FC<any> = ({isMobile}) => {

    const [newsItems] = React.useState<any>(newsMock.news);

    return (
        <Grid container spacing={2}>
            {newsItems.map((newItem: any, index: number) => (
                <Grid item xs={12} key={index}>
                    {isMobile ?
                        <NewsCardMobileComponent  {...newItem} />
                        :
                        <NewsCardComponent {...newItem} />
                    }
                   
                </Grid>
            ))}
        </Grid>
    );
}

export default NewsSection;
