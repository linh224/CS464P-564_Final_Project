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
        .then((data) =>
          booksArr.push(
            <Book
              img={data.items[0].volumeInfo.imageLinks.smallThumbnail}
              title={data.items[0].volumeInfo.title}
              author={data.items[0].volumeInfo.authors[0]}
              description={data.items[0].volumeInfo.description}
              publishedDate={data.items[0].volumeInfo.publishedDate}
              publisher={data.items[0].volumeInfo.publisher}
              previewLink={data.items[0].volumeInfo.previewLink}
            />
          )
        );
    });

    return booksArr;
  };

  /*
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
/*
    let keyedBookObject = {};
    for (let i = 0; i < booksArr.length; i++) {
      keyedBookObject[i] = booksArr[i];
    }
    
    console.log("Within Function")
    console.log(booksArr);
    console.log(typeof booksArr[0]);

    return booksArr;
  };
  */

  let booksArr = getGBAPIData();
  console.log("Outside Function");
  console.log(booksArr);
  console.log(booksArr[0]);

  let threeSampleBooks = [
    <Book
      img="http://books.google.com/books/content?id=EY69EAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      title="Iron Flame"
      author="Rebecca Yarros"
      description="Everyone expected Violet Sorrengail to die during her first year at Basgiath War College--Violet included. But Threshing was only the first impossible test meant to weed out the weak-willed, the unworthy, and the unlucky. Now the real training begins, and Violet's already wondering how she'll get through. It's not just that it's grueling and maliciously brutal, or even that it's designed to stretch the riders' capacity for pain beyond endurance. It's the new vice commandant, who's made it his personal mission to teach Violet exactly how powerless she is-unless she betrays the man she loves. Although Violet's body might be weaker and frailer than everyone else's, she still has her wits--and a will of iron. And leadership is forgetting the most important lesson Basgiath has taught her: Dragon riders make their own rules. But a determination to survive won't be enough this year. Because Violet knows the real secret hidden for centuries at Basgiath War College--and nothing, not even dragon fire, may be enough to save them in the end."
      publishedDate="2023-11-07"
      publisher="Entangled: Red Tower Books"
      previewLink="http://books.google.com/books?id=EY69EAAAQBAJ&dq=isbn:9781649374172&hl=&cd=1&source=gbs_api"
    />,
    <Book
      img="http://books.google.com/books/content?id=msSiEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
      title="Inheritance"
      author="Nora Roberts"
      description="Inheritance is the first in The Lost Bride Trilogy by #1 New York Times bestselling author Nora Roberts—a tale of tragedies, loves found and lost, and a family haunted for generations. 1806: Astrid Poole sits in her bridal clothes, overwhelmed with happiness. But before her marriage can be consummated, she is murdered, and the circle of gold torn from her finger. Her last words are a promise to Collin never to leave him... Graphic designer Sonya MacTavish is stunned to learn that her late father had a twin he never knew about—and that her newly discovered uncle, Collin Poole, has left her almost everything he owned, including a majestic Victorian house on the Maine coast, which the will stipulates she must live in it for at least three years. Her engagement recently broken, she sets off to find out why the boys were separated at birth—and why it was all kept secret until a genealogy website brought it to light. Trey, the young lawyer who greets her at the sprawling clifftop manor, notes Sonya’s unease—and acknowledges that yes, the place is haunted...but just a little. Sure enough, Sonya finds objects moved and music playing out of nowhere. She sees a painting by her father inexplicably hanging in her deceased uncle’s office, and a portrait of a woman named Astrid, whom the lawyer refers to as “the first lost bride.” It’s becoming clear that Sonya has inherited far more than a house. She has inherited a centuries-old curse, and a puzzle to be solved if there is any hope of breaking it..."
      publishedDate="2023-11-21"
      publisher="St. Martin's Press"
      previewLink="http://books.google.com/books?id=msSiEAAAQBAJ&printsec=frontcover&dq=isbn:9781250288332&hl=&cd=1&source=gbs_api"
    />,

    <Book
      img="http://books.google.com/books/content?id=3QPGzwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      title="The Exchange"
      author="John Grisham"
      description="#1 New York Times bestselling author John Grisham delivers high-flying international suspense in a stunning new legal thriller that marks the return of Mitch McDeere, the brilliant hero of The Firm. What became of Mitch and Abby McDeere after they exposed the crimes of Memphis law firm Bendini, Lambert & Locke and fled the country? The answer is in The Exchange, the riveting sequel to The Firm, the blockbuster thriller that launched the career of America's favorite storyteller. It is now fifteen years later, and Mitch and Abby are living in Manhattan, where Mitch is a partner at the largest law firm in the world. When a mentor in Rome asks him for a favor that will take him far from home, Mitch finds himself at the center of a sinister plot that has worldwide implications--and once again endangers his colleagues, friends, and family. Mitch has become a master at staying one step ahead of his adversaries, but this time there's nowhere to hide."
      publishedDate="2023-10-17"
      publisher="Doubleday"
      previewLink="http://books.google.com/books?id=3QPGzwEACAAJ&dq=isbn:9780385548953&hl=&cd=1&source=gbs_api"
    />,
  ];

  return threeSampleBooks;
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
