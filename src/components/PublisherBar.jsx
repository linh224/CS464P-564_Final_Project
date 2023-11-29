import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const PublisherBar = (props) => {
  const getNewData = () => {
    let keyToSearch = "list_name";
    let valueToSearch = props.name;
    let arrayOfData = props.data;

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //list of book for found category
    let listOfBooks = foundObject.books;
    const pubHold = [];
    const fullSet = {};

    listOfBooks.forEach((book) => {
      pubHold.push(book.publisher);
    });

    pubHold.forEach(function (x) {
        fullSet[x] = (fullSet[x] || 0) + 1;
    });

    return fullSet;
  };

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Publisher Distribution",
      },
    },
  };

  let data = {
    labels: Object.keys(getNewData()),
    datasets: [
      {
        label: props.name,
        data: Object.values(getNewData()),
        backgroundColor: generateRandomColors(),
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
export default PublisherBar;
