import React from 'react';
import { useState, useEffect } from 'react';
import BarChart from './BarChart.jsx';
import ListMovementDoughnut from './ListMovementDonut.jsx';
import CountCard from './CountCard.jsx';
import UniquePubCard from './UniquePubCard.jsx';
import TopThreeRank from './TopThreeRank.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from 'react-bootstrap';

function Category() {
  useEffect(() => {
    const url =
      'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let listOfData = data.results.lists;
        console.log('linh', data);
        setCategory(listOfData);
      })
      .catch((err) => console.log(err));
  }, []);
  const [category, setCategory] = useState([]);
  const [clickedName, setClickedName] = useState(null);

  const handleClick = (event) => {
    const name = event.target.textContent;
    const currentCard = event.target;

    const className = event.target.className;

    let hasClickedClass = className.includes('clicked-div');

    if (!hasClickedClass) {
      //Remove all clicked-div class from other elements
      const otherCards = document.querySelectorAll('.card.clicked-div');
      otherCards.forEach((card) => {
        card.classList.remove('clicked-div');
      });

      // If not present, add the class to the current element
      currentCard.classList.add('clicked-div');
    }

    setClickedName(name);
  };

  return (
    <Container className='fluid'>
      <Dropdown>
        <Dropdown.Toggle
          id='dropdown'
          style={{
            backgroundColor: 'var(--salmon)',
            fontFamily: 'Cocogoose',
            width: '100%',
            margin: '10px',
            border: 'var(--salmon)',
            fontSize: '4vw',
          }}
        >
          Select a Bestseller Category
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            marginTop: '0px',
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Cocogoose',
          }}
        >
          {category.map((currentCategory, index) => (
            <Dropdown.Item
              onClick={handleClick}
              id={currentCategory.list_id}
              key={index}
            >
              {currentCategory.list_name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className='flex text-center flex-wrap'>
        <div>
          <h1
            className='display-1'
            style={{
              fontFamily: 'Cocogoose',
              color: 'var(--salmon)',
            }}
          >
            {clickedName == null
              ? 'Welcome! Select a Category to Get Started'
              : clickedName}
          </h1>
        </div>
        <div>
          {clickedName && <TopThreeRank data={category} name={clickedName} />}
        </div>
        <Container className='fluid text-center'>
          <Container className='row'>
            <div className='col d-flex justify-content-center'>
              {clickedName && <CountCard data={category} name={clickedName} />}
            </div>
            <div className='col d-flex justify-content-center'>
              {clickedName && (
                <UniquePubCard data={category} name={clickedName} />
              )}
            </div>
          </Container>
          <Container className='row'>
            <Container
              className='col d-flex justify-content-center'
              style={{
                height: 'auto',
              }}
            >
              {clickedName && <BarChart data={category} name={clickedName} />}
            </Container>
            <Container
              className='col d-flex justify-content-center'
              style={{
                width: '50%',
              }}
            >
              {clickedName && (
                <ListMovementDoughnut data={category} name={clickedName} />
              )}
            </Container>
          </Container>
        </Container>
      </div>
    </Container>
  );
}

export default Category;
