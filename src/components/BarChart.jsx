import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/* 
//Replaced with palette colors
function generateRandomColors() {
  return Array.from({ length: 3 }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = 0.5;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  });
}
*/

const BarChart = (props) => {
  const getNewData = () => {
    let keyToSearch = 'list_name';
    let valueToSearch = props.name;
    let arrayOfData = props.data;

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //list of book for found category
    let listOfBooks = foundObject.books;
    console.log(listOfBooks);
    listOfBooks.sort(function (a, b) {
      return b.weeks_on_list - a.weeks_on_list;
    });

    //get top 3 of books
    let top3 = listOfBooks.slice(0, 3);

    const propertyToKeep1 = 'title';
    const propertyToKeep2 = 'weeks_on_list';
    const newLabels = top3.map((obj) => ({
      [propertyToKeep1]: obj[propertyToKeep1],
      [propertyToKeep2]: obj[propertyToKeep2],
    }));

    console.log('newlabels', newLabels);
    return newLabels;
  };
  let labels = getNewData();
  let options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Books with the Longest Streaks',
      },
      labels: {
        display: false,
      },
    },
  };

  let data = {
    labels: labels.map((element) => element.title),
    datasets: [
      {
        label: props.name + ' Weeks',
        data: labels.map((element) => element.weeks_on_list),
        backgroundColor: [
          '#ffd888',
          '#fdc583',
          '#fab27b',
          '#f89f76',
          '#f68d71',
          '#f47b6b',
        ],
        options: {
          maintainAspectRatio: false,
        },
      },
    ],
  };
  return <Bar data={data} options={options} />;
};
export default BarChart;
