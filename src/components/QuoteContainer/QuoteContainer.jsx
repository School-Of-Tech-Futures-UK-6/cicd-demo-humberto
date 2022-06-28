import RefreshIcon from '@mui/icons-material/Refresh';
import { QuoteCard } from '../QuoteCard/QuoteCard.jsx';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { getRandomPhrase } from './quoteContainer.js';
import * as React from 'react'
import './quoteContainer.css'

const QuoteContainer = () => {
    const [ phrase, setPhrase ] = React.useState([])
  
    React.useEffect(() => {
      setPhrase(getRandomPhrase())
    }, [])
  
    const handleClick = () => {
      setPhrase(getRandomPhrase())
    }
    
    return (
        <Container maxWidth="sm">
            <QuoteCard phrase={phrase} />
            <Button
                variant="contained"
                onClick={handleClick}
                endIcon={<RefreshIcon />}
            >
                Refresh
            </Button>
        </Container>
    )
}

export { QuoteContainer }