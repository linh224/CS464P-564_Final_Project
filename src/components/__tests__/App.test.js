import React from " react";
//import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App.jsx";
import Book from "./Book.jsx";

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
afterEach(cleanup);
describe("<App /> Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    render(<App />, div);
  });
});

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

    render(<Book {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeTruthy();
    expect(screen.getByText(mockProps.author)).toBeTruthy();
    expect(screen.getByText(mockProps.publishedDate)).toBeTruthy();
    expect(screen.getByText(mockProps.publisher)).toBeTruthy();
    expect(screen.getByText(mockProps.description)).toBeTruthy();
    expect(screen.getByLabelText("Learn More")).toBeTruthy();
    expect(screen.getByAltText("Thumbnail of Book Cover")).toBeTruthy();
  });
});
