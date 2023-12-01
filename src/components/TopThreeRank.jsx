import React from "react";
import { Top3Card } from "./Top3Card";

const TopThreeRank = (props) => {
  const getNewData = () => {
    let keyToSearch = "list_name";
    let valueToSearch = props.name;
    let arrayOfData = props.data;

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //list of book for found category
    let listOfBooks = foundObject.books;
    console.log(listOfBooks);
    const filteredData = listOfBooks.filter((book) => book.rank === 1);
    console.log(filteredData);
    return filteredData[0].title;
  };
  //const top3 = getNewData();
  return (
    <Top3Card
      counts={getNewData()}
      cardTitle="#1 Bestseller on Selected List"
    />
  );
};
export default TopThreeRank;
