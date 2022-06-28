
import { QuoteCard } from '../QuoteCard/QuoteCard.jsx';

import Container from '@mui/material/Container'
import { getRandomPhrase } from './quoteContainer.js';
import * as React from 'react'
import './quoteContainer.css'
import { QuoteRefreshButton } from '../QuoteRefreshButton/QuoteRefreshButton.jsx';

const QuoteContainer = () => {
    const [ phrase, setPhrase ] = React.useState([])
  
    React.useEffect(() => {
      setPhrase(getRandomPhrase())
    }, [])
  
    const handleClick = () => {
      setPhrase(getRandomPhrase(phrase))
    }
    
    return (
        <Container maxWidth="sm">
            <QuoteCard phrase={phrase} />
            <QuoteRefreshButton handleClick={handleClick}/>
        </Container>
    )
}

export { QuoteContainer }