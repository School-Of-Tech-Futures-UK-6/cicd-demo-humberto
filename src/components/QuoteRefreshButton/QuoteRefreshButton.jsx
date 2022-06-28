import Button from '@mui/material/Button'
import RefreshIcon from '@mui/icons-material/Refresh';

const QuoteRefreshButton = (props) => {
    return (
        <Button
        data-testid="quote-refresh"
        variant="contained"
        onClick={props.handleClick}
        endIcon={<RefreshIcon />}
    >
        Refresh
    </Button>
    )
}

export { QuoteRefreshButton }