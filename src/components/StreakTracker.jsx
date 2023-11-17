import React from 'react';

function StreakTracker() {
  const [listNameArr, setListsArr] = React.useState([]);
  const [bestSellersArr, setbestSellersArr] = React.useState([]);
  const [weeksOnListArr, setWeeksOnListArr] = React.useState([]);
  const [numResults, setNumResults] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp'
    )
      .then((response) => response.json())
      .then((data) => setListsArr(createListsArr(data)));
    //console.log('list name arr', listNameArr);
  }, []);

  function createListsArr(data) {
    const totalCount = data.num_results;
    let listNames = [];
    console.log('data', data);
    console.log('results', data.results);
    console.log('lists', data.results.lists);
    data.results.lists.forEach((list) => {
      listNames.push([list.list_name, createBookInfo(list)]);
    });
    return listNames;
  }

  function createBookInfo(data) {
    let bookInfo = [];
    data.books.forEach((book) => {
      bookInfo.push(
        ['book_image', book.book_image],
        ['book_image_width', book.book_image_width],
        ['book_image_heigth', book.book_image_height],
        ['description', book.description],
        ['publisher', book.publisher],
        ['title', book.title],
        ['weeks_on_list', book.weeks_on_list]
      );
    });
    return bookInfo;
  }

  React.useEffect(() => {
    fetch(
      'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp'
    )
      .then((response) => response.json())
      .then((data) => setListsArr(listObjectToArr(data.results.lists)));
  }, []);

  function listObjectToArr(data) {
    let listNames = [];
    data.forEach((list) => {
      listNames.push(list.list_name);
    });
    return listNames;
  }

  function createWeeksOnListArray(data) {
    let weeksOnList = [];
    data.forEach((list) => {
      list.books.forEach((book) => {
        weeksOnList.push(book.weeks_on_list);
      });
    });
    return weeksOnList;
  }

  return (
    <div>
      <header>
        <h1 className='welcome text-primary text-center p-5'>
          Explore New York Times Bestseller Lists
        </h1>
      </header>
      <main>
        <section>
          <div>
            <p>{weeksOnListArr.length}</p>
            <p>{listNameArr.toString()}</p>
            <p>{weeksOnListArr.toString()}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StreakTracker;
