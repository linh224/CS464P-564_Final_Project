import React from "react";
import { Book } from "./Book";
import { element } from "prop-types";

function Books() {
  //const apiKey = "AIzaSyDJz8Xa_tAwOasL0ZUVyjIe6ks1OeGvajU";
  //const isbn = "9781649374172";
  const [isbnArr, setISBNArr] = React.useState([]);
  const [booksArr, setBooksArr] = React.useState([]);

  let gbapiResults = [];

  //This is the API Call
  React.useEffect(() => {
    async function fetchNYTData() {
      await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp"
      )
        .then((response) => response.json())
        .then((data) => setISBNArr(createISBNArr(data.results.lists)));
    }
    fetchNYTData();
  }, []);

  //Will be used to make calls to the Google books API later
  function createISBNArr(data) {
    let isbnByCat = [];
    let temp = [];
    data.forEach((list) => {
      list.books.forEach((book) => {
        temp.push(book.primary_isbn13);
      });
      isbnByCat.push(temp);
      temp = [];
    });
    console.log(isbnByCat);
    console.log(isbnByCat[0]);
    console.log(isbnByCat[0][0]);

    getGoogleBooksData(isbnByCat);

    return isbnByCat;
  }

  /*
  //This is the API Call
  isbn.forEach((catArray) => {
    catArray.forEach((isbnNum) => {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=+isbn:" +
          isbnNum +
          "&key=AIzaSyDJz8Xa_tAwOasL0ZUVyjIe6ks1OeGvajU"
      )
        .then((response) => response.json())
        .then((data) => gbapiResults.push(data.items));
    });
    console.log(gbapiResults);
  });
  */
  function getGoogleBooksData(isbnArrForGoogle) {
    //React.useEffect(() => {
    console.log("From GetGoogleBooksDataFunction" + isbnArr);
    isbnArrForGoogle.forEach((isbnNum) => {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=+isbn:" +
          isbnNum +
          "&key=AIzaSyDJz8Xa_tAwOasL0ZUVyjIe6ks1OeGvajU"
      )
        .then((response) => response.json())
        .then((data) => routeAndParseData(data.items));

      console.log(isbnArr);
    });
  }
  //}, []);

  function routeAndParseData(data) {
    gbapiResults.push(data);
    setBooksArr(gbapiResults);
    console.log(data);
    console.log(gbapiResults);
    /*
    console.log(data);
    console.log(data[0].volumeInfo.title);
    console.log(data[0].volumeInfo.authors[0]);
    console.log(data[0].volumeInfo.description);
    console.log(data[0].volumeInfo.publisher);
    console.log(data[0].volumeInfo.publishedDate);
    console.log(data[0].volumeInfo.categories[0]);
    */
  }

  return (
    <div>
      <header>
        <h1 className="welcome text-primary text-center p-5">
          Explore NYT Bestsellers
        </h1>
      </header>
      <main>
        <section>
          <p className="intro text-center fs-5 fw-bold"></p>
          {booksArr.map((element) => (
            <Book
              img={element.volumeInfo.imageLinks.smallThumbnail}
              title={element.volumeInfo.title}
              author={element.volumeInfo.authors[0]}
              description={element.volumeInfo.description}
              publishedDate={element.volumeInfo.publishedDate}
              publisher={element.volumeInfo.publisher}
              previewLink={element.volumeInfo.previewLink}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Books;
