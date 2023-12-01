import React from 'react';
import { useState, useEffect } from 'react';
import BarChart from './BarChart.jsx';
import ListMovementDoughnut from './ListMovementDonut.jsx';
import CountCard from './CountCard.jsx';
import UniquePubCard from './UniquePubCard.jsx';
import TopThreeRank from './TopThreeRank.jsx';

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
    <div className='d-flex w-100'>
      <div className='left-side col-sm-2'>
        <span
          className='text text-center fs-3 p-3 fw-bold'
          style={{ color: 'var(--salmon)' }}
        >
          Categories
        </span>

        <div className='all-name-category'>
          {category.map((currentCategory, index) => (
            <div
              onClick={handleClick}
              className={`card text-dark p-1`}
              id={currentCategory.list_id}
              key={index}
              style={{ color: 'var(--salmon)' }}
            >
              {currentCategory.list_name}
            </div>
          ))}
        </div>
      </div>

      <div className='container-fluid d-flex flex-column text-center'>
        <div>
          <h1
            className='display-1'
            style={{
              textTransform: 'uppercase',
              fontFamily: 'Cocogoose',
              color: 'var(--salmon)',
            }}
          >
            {clickedName ? clickedName : 'Select a bestseller category'}
          </h1>
        </div>
        <div>
          {clickedName && <TopThreeRank data={category} name={clickedName} />}
        </div>
        <div className='container-fluid p-0 vh-100 d-flex flex-column text-center'>
          <div className='d-flex align-items-center bd-highlight mb-3 '>
            <div className='flex-fill bd-highlight'>
              {clickedName && <CountCard data={category} name={clickedName} />}
            </div>
            <div className='flex-fill bd-highlight'>
              {clickedName && (
                <UniquePubCard data={category} name={clickedName} />
              )}
            </div>
          </div>
          <div className='d-flex align-items-center bd-highlight mb-3 justify-content-between'>
            <div className='flex-fill bd-highlight'>
              {clickedName && <BarChart data={category} name={clickedName} />}
            </div>
            <div className='flex-fill bd-highlight'>
              {clickedName && (
                <ListMovementDoughnut data={category} name={clickedName} />
              )}{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
