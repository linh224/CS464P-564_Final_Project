import React from "react";
import { Book } from "./Book";

const BookView = (props) => {
  const getISBNByCat = () => {
    let keyToSearch = "list_name";
    let valueToSearch = props.name;
    let arrayOfData = props.data;

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //list of book for found category
    let listOfBooks = foundObject.books;

    let isbnByCat = [];

    listOfBooks.forEach((book) => {
      isbnByCat.push(book.primary_isbn13);
    });
    let isbnByCatSliced = isbnByCat.slice(0, 5);

    return isbnByCatSliced;
  };

  const getGBAPIData = () => {
    let isbnArr = getISBNByCat();
    let booksArr = [];

    isbnArr.forEach((isbnNum) => {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=+isbn:" +
          isbnNum +
          "&key=AIzaSyDJz8Xa_tAwOasL0ZUVyjIe6ks1OeGvajU"
      )
        .then((response) => response.json())
        .then((data) => booksArr.push(data.items[0].volumeInfo));
    });

    let keyedBookObject = {};
    for (let i = 0; i < booksArr.length; i++) {
      keyedBookObject[i] = booksArr[i];
    }
    console.log(booksArr);
    console.log(booksArr[0]);

    return booksArr;
  };

  let booksArr = getGBAPIData().slice(0, 2);

  console.log(booksArr);

  let twoBooks = [
    <Book
      img="http://books.google.com/books/content?id=3QPGzwEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      title="The Exchange"
      author="John Grisham"
      description="#1 New York Times bestselling author John Grisham delivers high-flying international suspense in a stunning new legal thriller that marks the return of Mitch McDeere, the brilliant hero of The Firm. What became of Mitch and Abby McDeere after they exposed the crimes of Memphis law firm Bendini, Lambert & Locke and fled the country? The answer is in The Exchange, the riveting sequel to The Firm, the blockbuster thriller that launched the career of America's favorite storyteller. It is now fifteen years later, and Mitch and Abby are living in Manhattan, where Mitch is a partner at the largest law firm in the world. When a mentor in Rome asks him for a favor that will take him far from home, Mitch finds himself at the center of a sinister plot that has worldwide implications--and once again endangers his colleagues, friends, and family. Mitch has become a master at staying one step ahead of his adversaries, but this time there's nowhere to hide."
      publishedDate="2023-10-17"
      publisher="Doubleday"
      previewLink="http://books.google.com/books?id=3QPGzwEACAAJ&dq=isbn:9780385548953&hl=&cd=1&source=gbs_api"
    />,
    <Book
      img="http://books.google.com/books/content?id=3QPGzwEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      title="The Exchange"
      author="John Grisham"
      description="#1 New York Times bestselling author John Grisham delivers high-flying international suspense in a stunning new legal thriller that marks the return of Mitch McDeere, the brilliant hero of The Firm. What became of Mitch and Abby McDeere after they exposed the crimes of Memphis law firm Bendini, Lambert & Locke and fled the country? The answer is in The Exchange, the riveting sequel to The Firm, the blockbuster thriller that launched the career of America's favorite storyteller. It is now fifteen years later, and Mitch and Abby are living in Manhattan, where Mitch is a partner at the largest law firm in the world. When a mentor in Rome asks him for a favor that will take him far from home, Mitch finds himself at the center of a sinister plot that has worldwide implications--and once again endangers his colleagues, friends, and family. Mitch has become a master at staying one step ahead of his adversaries, but this time there's nowhere to hide."
      publishedDate="2023-10-17"
      publisher="Doubleday"
      previewLink="http://books.google.com/books?id=3QPGzwEACAAJ&dq=isbn:9780385548953&hl=&cd=1&source=gbs_api"
    />,
  ];

  return twoBooks;
};
/*
  return (
    <Book
      img={booksArr[0].imageLinks.smallThumbnail}
      title={booksArr[0].title}
      author={booksArr[0].authors[0]}
      description={booksArr[0]description}
      publishedDate={booksArr[0].publishedDate}
      publisher={booksArr[0].publisher}
      previewLink={booksArr[0].previewLink}
    />
  );
};
*/
/*
  return (
    <Book
      img={booksArr[0][0].volumeInfo.imageLinks.smallThumbnail}
      title={booksArr[0][0].volumeInfo.title}
      author={booksArr[0][0].volumeInfo.authors[0]}
      description={booksArr[0][0].volumeInfo.description}
      publishedDate={booksArr[0][0].volumeInfo.publishedDate}
      publisher={booksArr[0][0].volumeInfo.publisher}
      previewLink={booksArr[0][0].volumeInfo.previewLink}
    />
  );
};
*/
/*
  return booksArr.map((element) => (
    <Book
      img={element[0].volumeInfo.imageLinks.smallThumbnail}
      title={element[0].volumeInfo.title}
      author={element.volumeInfo.authors[0]}
      description={element.volumeInfo.description}
      publishedDate={element.volumeInfo.publishedDate}
      publisher={element.volumeInfo.publisher}
      previewLink={element.volumeInfo.previewLink}
    />
  ));
};
*/
export default BookView;

/*
import React from "react";
import { Book } from "./Book";
//import { element } from "prop-types";

function BookView() {
  const [booksArr, setBooksArr] = React.useState([]);

  let gbapiResults = [];

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

*/
