import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
import './Dashboard.jsx';
//import dashboard

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColors = [
  'rgba(255, 216, 136, 1)',
  'rgba(253, 197, 131, 1)',
  'rgba(250, 178, 125, 1)',
  'rgba(248, 159, 118, 1)',
  'rgba(246, 141, 113, 1)',
  'rgba(244, 123, 107, 1)',
];

const borderColors = [
  'rgba(255, 216, 136, 1)',
  'rgba(253, 197, 131, 1)',
  'rgba(250, 178, 125, 1)',
  'rgba(248, 159, 118, 1)',
  'rgba(246, 141, 113, 1)',
  'rgba(244, 123, 107, 1)',
];
/*
const sampleData = {
  'Book title': 'beeboopbooks',
  rawrs: 'beeboopbooks',
  wowo: 'penguin',
};
*/
/*var data;

function dataProcessing(sampleData) {
  const pubCounts = {};
  const individualVals = [];
  const pubs = [];
  const counts = [];
  //for (const book of sampleData) {
  //  pubs.push(book.publisher);
  //}
  pubs.forEach(function (x) {
    pubCounts[x] = (pubCounts[x] || 0) + 1;
  });
  console.log(pubCounts);
  for (const key in pubCounts) {
    const value = pubCounts[key];
    individualVals.push(key);
    counts.push(value);
  }
  console.log(counts);
  console.log(individualVals);
  //renderChart(counts, individualVals);
  //Process data into counts of publishers
  /*var pubNames = [];
    var pubAgg = [];
    for (const [key, value] of Object.entries(data)) {
        if (pubNames.includes(key))
        {
            
          }
    console.log(key, value);
      pubNames.push(key);

    }*/

/*
  for (var x in data) {
    if (data[x][1] in pubList) {
      pubList[data[x][1]] += 1;
    } else {
      pubList[data[x][1]] = 1;
    }
  }
}*/

const pubCounts = [45, 22, 69, 42];
const publishers = ['Penguin', 'Tin House', 'Harper Collins', 'Scholastic'];

const data = {
  labels: publishers,
  datasets: [
    {
      label: 'Publisher Counts',
      data: pubCounts,
      backgroundColor: backgroundColors,
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

function PublisherDonut() {
  //Make donut using publisher data
  //Currently contains copied style from streakTracker
  //dataProcessing(data);
  return (
    <div className='card mb-3' style={{ maxWidth: '540px' }}>
      <Doughnut data={data} />
    </div>
  );
}

export default PublisherDonut;
