import React from "react";
import { Card } from "./Card";

const CountCard = (props) => {
  const getNewData = () => {
    let keyToSearch = "list_name";
    let valueToSearch = props.name;
    let arrayOfData = props.data;

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //list of book for found category
    let listOfBooks = foundObject.books;

    return listOfBooks.length;
  };

  return <Card count={getNewData()} cardTitle="Count of Bestsellers" />;
};
export default CountCard;
