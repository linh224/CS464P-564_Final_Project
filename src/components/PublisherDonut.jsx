import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

const sampleData = {
  'Book title': 'beeboopbooks',
  rawrs: 'beeboopbooks',
  wowo: 'penguin',
};

var data;

function dataProcessing(sampleData) {
  const pubCounts = {};
  const individualVals = [];
  const pubs = [];
  const counts = [];
  for (const book of sampleData) {
    pubs.push(book.publisher);
  }
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
  data = {
    labels: pubs,
    datasets: [
      {
        label: 'Character Count',
        data: counts,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
  /*
  for (var x in data) {
    if (data[x][1] in pubList) {
      pubList[data[x][1]] += 1;
    } else {
      pubList[data[x][1]] = 1;
    }
  }*/
}

function PublisherDonut() {
  //Make donut using publisher data
  //Currently contains copied style from streakTracker
  dataProcessing(sampleData);
  return (
    <div className='card mb-3' style={{ maxWidth: '540px' }}>
      <Doughnut data={data} />
    </div>
  );
}

export default PublisherDonut;
