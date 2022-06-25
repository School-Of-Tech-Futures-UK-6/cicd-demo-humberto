import './App.css';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import { getRandomPhrase } from "./appLogic.js"
import * as React from 'react'
import { CardContent, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

function App() {
  const [ phrase, setPhrase ] = React.useState([])

  React.useEffect(() => {
    setPhrase(getRandomPhrase())
  }, [])

  const handleClick = () => {
    setPhrase(getRandomPhrase())
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography color="text.primary">{phrase.content}</Typography>
              <Typography color="text.secondary">{phrase.author}</Typography>
            </CardContent>
          </React.Fragment>
        </Card>
        <Button 
          variant="contained" 
          onClick={handleClick}
          endIcon={<RefreshIcon/>}
        >
          Refresh
        </Button>
      </Container>
    </div>
  );
}

export default App;
