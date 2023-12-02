import React from 'react';
import { useState, useEffect } from 'react';
import BookView from './BookView';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';

function IsbnCategory() {
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
              ? 'View Top Books! Select a Category to Get Started'
              : clickedName}
          </h1>
        </div>
      </div>
      <div>
        {clickedName && <BookView data={category} name={clickedName} />}
      </div>
    </Container>
  );
}

export default IsbnCategory;
