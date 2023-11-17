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
  /*
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
  */

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

export default Dashboard;
