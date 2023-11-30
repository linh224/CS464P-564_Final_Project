import React from 'react';
import { Top3Card } from './Top3Card';

const TopThreeRank = (props) => {
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
    return listOfBooks[0].title;
  };
  //const top3 = getNewData();
  return (
    <Top3Card counts={getNewData()} cardTitle='#1 Bestseller on Current List' />
  );
};
export default TopThreeRank;
