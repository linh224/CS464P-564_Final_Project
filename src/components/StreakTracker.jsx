import { variance } from '@babel/types';
import { ContactPageSharp } from '@mui/icons-material';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//Once API structures are in add book cover and list information
function StreakTracker() {
  const list = 'placeholder list title';
  const apiData = [
    ['book title', 45],
    ['title of book', 21],
    ['book', 1],
  ];
  var streak = 0;
  var title = '';
  for (var x in apiData) {
    if (apiData[x][1] > streak) {
      streak = apiData[x][1];
      title = apiData[x][0];
    }
  }

  return (
    <div className='card mb-3' style={{ maxWidth: '540px' }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src='http://placekitten.com/200/300'
            class='img-fluid rounded-start'
            alt='placeholder cat'
          ></img>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <p
              className='card-text'
              style={{ color: '#cc9735', fontWeight: 'bold', fontSize: '2rem' }}
            >
              {title}
            </p>
            <p className='card-text'>has been on {list} for</p>
            <p
              className='card-text'
              style={{ color: '#cc9735', fontWeight: 'bold', fontSize: '2rem' }}
            >
              {streak}
            </p>
            <p className='card-text'>days!</p>
            <p className='card-text'></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreakTracker;

/*
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


import React from "react";

function Dashboard() {
  const [listNameArr, setListsArr] = React.useState([]);
  //const [bestSellersArr, setbestSellersArr] = React.useState([]);
  const [rankMovementArr, setRankMoveArr] = React.useState([]);
  const [weeksOnListArr, setWeeksOnListArr] = React.useState([]);
  const [numResults, setNumResults] = React.useState([]);
  const [publisherDist, setPublisherDist] = React.useState([]);
  const [isbn, setISBNArr] = React.useState([]);
  //const apikey = ${CS464P-564_Final_Project.env.NYT_API_KEY};

  React.useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp"
    )
      .then((response) => response.json())
      .then((data) => routeAndParseData(data.results.lists));
  }, []);

  function routeAndParseData(data) {
    setListsArr(listObjectToArr(data));
    setWeeksOnListArr(createWeeksOnListArray(data));
    setRankMoveArr(createRankMovement(data));
    setPublisherDist(createPublisherDist(data));
    setISBNArr(createISBNArr(data));
  }

  function createRankMovement(data) {
    const key = ["new", "noChange", "up", "down"];
    let rankValues = [0, 0, 0, 0];
    data.forEach((list) => {
      list.books.forEach((book) => {
        if (book.rank_last_week === 0) {
          rankValues[0]++;
        } else if (book.rank_last_week === book.rank) {
          rankValues[1]++;
        } else if (book.rank > book.rank_last_week) {
          rankValues[2]++;
        } else {
          rankValues[3]++;
        }
      });
    });
    console.log(rankValues);
    return rankValues;
  }

  //Array with all of the category names. We can use this to map all of the other arrays later
  function listObjectToArr(data) {
    let listNames = [];
    data.forEach((list) => {
      listNames.push(list.list_name);
    });
    console.log(listNames);
    return listNames;
  }

  //Creates array of all the "weeks on list" data points here we have one big array and one arrray of arrays divided by cateogry depending on
  function createWeeksOnListArray(data) {
    let weeksOnList = [];
    let weeksByCat = [];
    let temp = [];
    data.forEach((list) => {
      list.books.forEach((book) => {
        weeksOnList.push(book.weeks_on_list);
        temp.push(book.weeks_on_list);
      });
      weeksByCat.push(temp);
      temp = [];
    });
    setNumResults(weeksOnList.length);
    console.log(weeksByCat);
    console.log(weeksOnList);
    return weeksOnList;
  }

  function createPublisherDist(data) {
    let publishers = [];
    let publishersByCat = [];
    let temp = [];
    data.forEach((list) => {
      list.books.forEach((book) => {
        publishers.push(book.publisher);
        temp.push(book.publisher);
      });
      publishersByCat.push(temp);
      temp = [];
    });
    console.log(publishersByCat);
    console.log(publishers);
    let pubCounts = countPublishers(publishers);
    console.log(pubCounts);

    return publishers;
  }
  function countPublishers(publishersArr) {
    const counts = {};
    publishersArr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    console.log(counts);
  }
  //https://javascript.plainenglish.io/how-to-count-duplicate-values-in-an-array-in-javascript-544ca527313

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

    return isbnByCat;
  }
  
{
        data.results.lists.forEach((list) => {
          list.books.forEach((book) => {
            weeksOnList.push(book.weeks_on_list);
          });
        });
        resultCount = data.num_results;
        console.log(data);
        console.log(data.num_results);
        console.log(data.results.lists);
        console.log(data.results.lists);
        console.log(bestsellerList);
        console.log(weeksOnList);
      }
  

  return (
    <div>
      <header>
        <h1 className="welcome text-primary text-center p-5">
          Explore New York Times Bestseller Lists
        </h1>
      </header>
      <main>
        <section>
          <div>
            <p>{numResults}</p>
            <p>{listNameArr.toString()}</p>
            <p>{weeksOnListArr.toString()}</p>
            <p>{rankMovementArr.toString()}</p>
            <p>{publisherDist.toString()}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StreakTracker;
*/
