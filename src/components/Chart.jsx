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
    const alpha = 0.5; // You can adjust the alpha value as needed
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  });
}

const Chart = (props) => {
  const getNewData = () => {
    let keyToSearch = "list_name";
    let valueToSearch = props.name;
    let arrayOfData = props.data;

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //console.log("foundObject", foundObject);

    //list of book for found category
    let listOfBooks = foundObject.books;
    listOfBooks.sort(function (a, b) {
      return b.weeks_on_list - a.weeks_on_list;
    });

    //get top 3 of books
    let top3 = listOfBooks.slice(0, 3);

    const propertyToKeep1 = "title";
    const propertyToKeep2 = "weeks_on_list";
    const newLabels = top3.map((obj) => ({
      [propertyToKeep1]: obj[propertyToKeep1],
      [propertyToKeep2]: obj[propertyToKeep2],
    }));

    console.log("newlabels", newLabels);
    return newLabels;
  };
  let labels = getNewData();
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Top 3 Longest on Week List",
      },
    },
  };

  let data = {
    labels: labels.map((element) => element.title),
    datasets: [
      {
        label: props.name,
        data: labels.map((element) => element.weeks_on_list),
        backgroundColor: generateRandomColors(),
      },
    ],
  };
  //return <Bar options={options} data={data} />;
  return <Bar options={options} data={data} />;
};
export default Chart;
