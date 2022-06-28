import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteContainer } from "./QuoteContainer.jsx";

test("renders a quote card", () => {
    // Arrange
    // Nothing to arrange!

    // Act
    render(<QuoteContainer />)

    // Assert
    const quoteCard = screen.getByTestId("quote-card")
    expect(quoteCard).toBeInTheDocument()
})

test("renders the quote refresh button", () => {
    // Arrange
    // Nothing to arrange!

    // Act
    render(<QuoteContainer />)

    // Assert
    const quoteRefreshButton = screen.getByTestId("quote-refresh")
    expect(quoteRefreshButton).toBeInTheDocument()
})

test("refresh button triggers a new quote", () => {
    // Arrange
    render(<QuoteContainer />)
    const quoteText = screen.getByTestId("quote-card-main-text").textContent
    
    // Act
    const refreshButton = screen.getByTestId("quote-refresh")
    fireEvent.click(refreshButton)

    // Assert
    const newText = screen.getByTestId("quote-card-main-text").textContent
    expect(newText).not.toEqual(quoteText)
})