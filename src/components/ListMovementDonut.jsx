import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function generateRandomColors() {
  return Array.from({ length: 3 }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = 0.5;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  });
}

const ListMovementDoughnut = (props) => {
  const getNewData = () => {
    let keyToSearch = "list_name";
    let valueToSearch = props.name;
    let arrayOfData = props.data;
    let rankValues = [0, 0, 0, 0];

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //list of book for found category
    let listOfBooks = foundObject.books;
    listOfBooks.forEach((book) => {
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

    return rankValues;
  };
  //let labels = getNewData();

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Movement in Rank",
      },
    },
  };

  let data = {
    labels: ["New this Week", "No Change", "Moved Up", "Moved Down"],
    datasets: [
      {
        label: props.name,
        data: getNewData(),
        backgroundColor: generateRandomColors(),
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
};
export default ListMovementDoughnut;