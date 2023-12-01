import React from "react";
import { Card } from "./Card";

const UniquePubCard = (props) => {
  const getNewData = () => {
    let keyToSearch = "list_name";
    let valueToSearch = props.name;
    let arrayOfData = props.data;

    const foundObject = arrayOfData.find(
      (obj) => obj[keyToSearch].trim() === valueToSearch.trim()
    );

    //list of book for found category
    let listOfBooks = foundObject.books;

    let publishers = [];

    // parse API data

    listOfBooks.forEach((book) => {
      publishers.push(book.publisher);
    });

    //call helper function to count instance of each publisher
    let pubCounts = countPublishers(publishers);

    return Object.values(pubCounts).length;
  };

  function countPublishers(publishersArr) {
    const counts = {};
    publishersArr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    //console.log(counts);
    //console.log(typeof counts);
    return counts;
  }

  return <Card count={getNewData()} cardTitle="Unique Count of Publishers" />;
};
export default UniquePubCard;
