import { render, screen } from '@testing-library/react';
import { getRandomPhrase } from '../QuoteContainer/QuoteContainer.js';
import { QuoteCard } from './QuoteCard.jsx';

test('renders main quote text for card', () => {
    // Arrange
    let phrase = getRandomPhrase()

    // Act
    render(<QuoteCard phrase={phrase} />);

    // Assert
    const quoteText = screen.getByTestId("quote-card-main-text");
    expect(quoteText).toBeInTheDocument();
    expect(quoteText.innerText).not.toBe(null)
});

test('renders the quote author', () => {
    // Arrange
    let phrase = getRandomPhrase()

    // Act
    render(<QuoteCard phrase={phrase} />);

    // Assert
    const quoteText = screen.getByTestId("quote-card-author-text");
    expect(quoteText).toBeInTheDocument();
    expect(quoteText.innerText).not.toBe(null)
});