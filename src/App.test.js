//import { render, screen } from '@testing-library/react';

import React from " react";
import ReactDOM from "react-dom";
//import App from "./App";
import Book from "./Book.jsx";

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
/*
describe("<App /> Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
*/
describe("Book component", () => {
  it("renders correctly with required props", () => {
    const mockProps = {
      previewLink: "https://example.com/book",
      img: "https://example.com/book-cover.jpg",
      title: "The Book Title",
      author: "John Doe",
      publishedDate: "2023-10-26",
      publisher: "Example Press",
      description: "This is a book description.",
    };

    const { queryByText, getByAltText, getByLabelText } = ReactDOM.render(
      <Book {...mockProps} />
    );

    expect(queryByText(mockProps.title)).toBeTruthy();
    expect(queryByText(mockProps.author)).toBeTruthy();
    expect(queryByText(mockProps.publishedDate)).toBeTruthy();
    expect(queryByText(mockProps.publisher)).toBeTruthy();
    expect(queryByText(mockProps.description)).toBeTruthy();
    expect(getByLabelText("Learn More")).toBeTruthy();
    expect(getByAltText("Thumbnail of Book Cover")).toBeTruthy();
  });
});
