import React from 'react';
import { useState, useEffect } from 'react';
import BarChart from './BarChart.jsx';
import ListMovementDoughnut from './ListMovementDonut.jsx';
import CountCard from './CountCard.jsx';
import UniquePubCard from './UniquePubCard.jsx';
import TopThreeRank from './TopThreeRank.jsx';
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

function Category() {
  useEffect(() => {
    const url =
      'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let listOfData = data.results.lists;
        setCategory(listOfData);
      })
      .catch((err) => console.log(err));
  }, []);
  const [category, setCategory] = useState([]);
  const [clickedName, setClickedName] = useState(null);

  const handleLiClick = (event) => {
    const name = event.target.textContent;
    setClickedName(name);
  };

  return (
    <div className='d-flex w-100'>
      <div className='left-side col-sm-2'>
        <span className='text-primary text-center fs-3 p-3 fw-bold'>
          All Category
        </span>
        <div className='all-name-category'>
          {category.map((currentCategory, idex) => (
            <div
              onClick={handleLiClick}
              className='card text-dark p-1'
              key={idex}
            >
              <p>{currentCategory.list_name} </p>
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
              color: '#ffd888',
            }}
          >
            {clickedName}
          </h1>
        </div>
        <div>
          {clickedName && <TopThreeRank data={category} name={clickedName} />}
        </div>
        <div className='container-fluid p-0 vh-100 d-flex flex-column text-center'>
          <div class='d-flex align-items-center bd-highlight mb-3 '>
            <div class='flex-fill bd-highlight'>
              {clickedName && <CountCard data={category} name={clickedName} />}
            </div>
            <div class='flex-fill bd-highlight'>
              {clickedName && (
                <UniquePubCard data={category} name={clickedName} />
              )}
            </div>
          </div>
          <div class='d-flex align-items-center bd-highlight mb-3 justify-content-between'>
            <div class='flex-fill bd-highlight'>
              {clickedName && <BarChart data={category} name={clickedName} />}
            </div>
            <div class='flex-fill bd-highlight'>
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
