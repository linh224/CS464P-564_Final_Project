import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';

const sampleData = [
  ['Book title', 'beeboopbooks'],
  ['rawrs', 'beeboopbooks'],
  ['wowo', 'penguin'],
];

function dataProcessing(data) {
  //Process data into counts of publishers
  pubList = {};
  for (var x in data) {
    if (data[x][1] in pubList) {
      pubList[data[x][1]][1] += 1;
    } else {
      publist.push[(data[x][1], 1)];
    }
  }
  console.log(pubList);
}

function PublisherDonut() {
  //Make donut using publisher data
  //Currently contains copied style from streakTracker
  dataProcessing(sampleData);
  return (
    <div className='card mb-3' style={{ maxWidth: '540px' }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src='http://placekitten.com/200/300'
            className='img-fluid rounded-start'
            alt='placeholder cat'
          ></img>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <p
              className='card-text'
              style={{
                color: '#cc9735',
                fontWeight: 'bold',
                fontSize: '2rem',
              }}
            >
              {title}
            </p>
            <p className='card-text'>has been on {list} for</p>
            <p
              className='card-text'
              style={{
                color: '#cc9735',
                fontWeight: 'bold',
                fontSize: '2rem',
              }}
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

export default PublisherDonut;
