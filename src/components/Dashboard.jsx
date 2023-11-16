import React from "react";

function Dashboard() {
  const [listNameArr, setListsArr] = React.useState([]);
  //const [bestSellersArr, setbestSellersArr] = React.useState([]);
  const [weeksOnListArr, setWeeksOnListArr] = React.useState([]);
  const [numResults, setNumResults] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp"
    )
      .then((response) => response.json())
      .then((data) =>
        setWeeksOnListArr(createWeeksOnListArray(data.results.lists))
      );
  }, []);

  React.useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp"
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
  /*
  function createArrays(data) {
    //let resultCount = 0;
    let weeksOnList = [];
    data.results.lists.forEach((list) => {
      list.books.forEach((book) => {
        weeksOnList.push(book.weeks_on_list);
      });
    });
    //resultCount = data.num_results;
    console.log(weeksOnList);
    return weeksOnList;
  }
  */
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
            <p>{weeksOnListArr.length}</p>
            <p>{listNameArr.toString()}</p>
            <p>{weeksOnListArr.toString()}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
