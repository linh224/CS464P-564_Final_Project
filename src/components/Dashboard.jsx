import React from "react";
//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

//ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
//https://react-chartjs-2.js.org/faq/registered-scale/

const backgroundColors = ["#B68D40", "#D6AD60", "#F4EBD0", "#122620"];

const borderColors = ["#B68D40", "#D6AD60", "#F4EBD0", "#122620"];

function Dashboard() {
  //THESE ARE THE VARIABLES THAT HAVE DATA FOR THE VISUALS
  const [listNameArr, setListsArr] = React.useState([]);
  //const [bestSellersArr, setbestSellersArr] = React.useState([]);
  const [rankMovementArr, setRankMoveArr] = React.useState([]);
  const [weeksOnListArr, setWeeksOnListArr] = React.useState([]);
  const [numResults, setNumResults] = React.useState([]);
  const [numPublishers, setNumPublishers] = React.useState([]);
  const [publisherDist, setPublisherDist] = React.useState([]);
  const [isbn, setISBNArr] = React.useState([]);
  //const apikey = ${CS464P-564_Final_Project.env.NYT_API_KEY};

  //This is the API Call
  React.useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp"
    )
      .then((response) => response.json())
      .then((data) => routeAndParseData(data.results.lists));
  }, []);

  //This is a helper function that sends the API reponse data to various other funcitons to be parsed the way we want.
  function routeAndParseData(data) {
    setListsArr(listObjectToArr(data));
    setWeeksOnListArr(createWeeksOnListArray(data));
    setRankMoveArr(createRankMovement(data));
    setPublisherDist(createPublisherDist(data));
    setISBNArr(createISBNArr(data));
  }

  //This function iterates through the data and and counts which books move up/down in rank, are new or havent changed.
  //Depending on the state it will either use the bulk array "rankValues" or one of the arrays from "rankvaluesbycat"
  //For a single category we can return a single index of the array for a chart
  function createRankMovement(data) {
    //Data order
    //const key = ["new", "noChange", "up", "down"];
    let rankValues = [0, 0, 0, 0];
    let rankValuesByCat = [];
    let temp = [0, 0, 0, 0];

    data.forEach((list) => {
      list.books.forEach((book) => {
        if (book.rank_last_week === 0) {
          rankValues[0]++;
          temp[0]++;
        } else if (book.rank_last_week === book.rank) {
          rankValues[1]++;
          temp[1]++;
        } else if (book.rank > book.rank_last_week) {
          rankValues[2]++;
          temp[2]++;
        } else {
          rankValues[3]++;
          temp[3]++;
        }
      });
      rankValuesByCat.push(temp);
      temp = [0, 0, 0, 0];
    });

    // console.log(rankValues);
    // console.log("Rank values by Cat" + rankValuesByCat);
    // console.log(rankValuesByCat);
    return rankValues;
  }

  //Array with all of the category names. We can use this to map all of the other arrays later and use for the drop down list
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
    let avgWeeksByCat = [];
    let temp = [];
    data.forEach((list) => {
      list.books.forEach((book) => {
        weeksOnList.push(book.weeks_on_list);
        temp.push(book.weeks_on_list);
      });
      weeksByCat.push(temp);
      temp = [];
    });
    avgWeeksByCat = weeksByCat.map(
      (cat) =>
        cat.reduce((accumulator, currentValue) => accumulator + currentValue) /
        cat.length
    );

    // console.log(avgWeeksByCat);
    setNumResults(weeksOnList.length);
    //console.log(weeksByCat);
    // console.log(weeksOnList);
    return avgWeeksByCat;
  }

  //This is a funciton that (1) gets the publishers, (2) divides the publishers by category
  // (3) passes data to a function to count the instances of each publisher, (4) filters the returned publisher count object
  // into a smaller object that can be used as data for a visual
  // right now this is a pretty messy function
  function createPublisherDist(data) {
    let publishers = [];
    let publishersByCat = [];
    let temp = [];
    // parse API data
    data.forEach((list) => {
      list.books.forEach((book) => {
        publishers.push(book.publisher);
        temp.push(book.publisher);
      });
      publishersByCat.push(temp);
      temp = [];
    });
    //call helper function to count instance of each publisher
    let pubCounts = countPublishers(publishers);

    //Get the publisher count for card visual
    setNumPublishers(Object.values(pubCounts).length);

    // console.log(publishersByCat);
    // console.log(publishers);
    // console.log("Publisher Counts");
    // console.log(pubCounts);

    //Filter publisher list to only have count > 5
    const filteredPublisherCountObj = {};
    for (const value in pubCounts) {
      if (pubCounts[value] > 5) {
        filteredPublisherCountObj[value] = pubCounts[value];
      }
    }

    // console.log(filteredPublisherCountObj);
    // console.log(publisherCounts);

    //Return the filtered list for use in the charts
    return filteredPublisherCountObj;
  }

  //This is just a helper funciton that turns the publishers array from the reponse data into an object with publisher name and
  // count of bestsellers as a key value pair.
  function countPublishers(publishersArr) {
    const counts = {};
    publishersArr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    //console.log(counts);
    //console.log(typeof counts);
    return counts;
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
    //console.log(isbnByCat);

    return isbnByCat;
  }

  //BEGIN Data added to ChartJS data objects
  const rankDataDoughnut = {
    labels: ["New This Week", "No Change", "Moved Up", "Moved Down"],
    datasets: [
      {
        label: "Book Count",
        data: rankMovementArr,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
  const avgWeeksDataBar = {
    labels: listNameArr,
    datasets: [
      {
        label: "Average Weeks",
        data: weeksOnListArr,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const publisherDataPie = {
    labels: Object.keys(publisherDist),
    datasets: [
      {
        label: "Count of Bestsellers",
        data: Object.values(publisherDist),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
  //END ChartJS data Objects

  return (
    <div>
      <header>
        <h1 className="welcome text-primary text-center p-5">
          Explore New York Times Bestseller Lists
        </h1>
      </header>
      <main>
        <DropdownButton
          id="dropdown-basic-button mp-10"
          title="Bestseller List Category"
        >
          {listNameArr.map((listName, index) => (
            <Dropdown.Item key={index} href="#/">
              {listName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <section className="dashboard-visual-container">
          <div className="card-visual">
            <h2>{numResults}</h2>
            <p>Count of NYT Bestsellers</p>
          </div>

          <div className="card-visual">
            <h2>{numPublishers}</h2>
            <p>Unique Count of Publishers</p>
          </div>

          <div className="charts">
            <h2>Movement in Rank</h2>
            <Doughnut data={rankDataDoughnut} />
          </div>
          <div className="charts">
            <h2>Average Weeks Spent on List by List</h2>
            <Bar data={avgWeeksDataBar} />
          </div>

          <div className="charts">
            <h2>Publishers with More than Five Books on a List</h2>
            <Bar data={publisherDataPie} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
