import Card from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material';
import * as React from 'react'
import './quoteCard.css'

const QuoteCard = (props) => {    
    return (
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography data-testid="quote-card-main-text" color="text.primary">{props.phrase.content}</Typography>
              <Typography data-testid="quote-card-author-text" color="text.secondary">{props.phrase.author}</Typography>
            </CardContent>
          </React.Fragment>
        </Card>
    )
}

export { QuoteCard }