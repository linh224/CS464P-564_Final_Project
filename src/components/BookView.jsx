import React from "react";
import { useState, useEffect } from "react";
import { Book } from "./Book";
//import { type } from "@testing-library/user-event/dist/type";

const BookView = (props) => {
  let keyToSearch = "list_name";
  let valueToSearch = props.name;
  let arrayOfData = props.data;

  const foundObject = arrayOfData.find(
    (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
  );
  // isbn Num for just the first book in the list
  let isbnNum = foundObject.books[0].primary_isbn13;
  const [books, setBooks] = useState([]);
  //const [isbnNum, setISBNNum] = useState([]);
  //isbnArr.forEach((isbnNum) => {
  useEffect(() => {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=+isbn:" +
      isbnNum +
      "&key=AIzaSyDJz8Xa_tAwOasL0ZUVyjIe6ks1OeGvajU";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Deana");
        let volumeInfo = data.items[0].volumeInfo;
        setBooks(createBookArr(volumeInfo));
      })
      .catch((err) => console.log(err));
  }, [isbnNum]);
  // });

  function createBookArr(volumeInfo) {
    return (
      <Book
        img={volumeInfo.imageLinks.smallThumbnail}
        title={volumeInfo.title}
        author={volumeInfo.authors[0]}
        description={volumeInfo.description}
        publishedDate={volumeInfo.publishedDate}
        publisher={volumeInfo.publisher}
        previewLink={volumeInfo.previewLink}
      />
    );
  }

  return books;
};

export default BookView;
