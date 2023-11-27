import React, {useState, useEffect, createContext, useContext} from "react";
import { Context } from "./Context.js"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownItem } from "react-bootstrap";

function ListDropdown() {
    const {listNameArr, setListsArr, subList, setSubList} = useContext(Context);
    var listList = [];
    listNameArr.forEach((list) => {
      listList.push(list.list_name)
    });
    return (
        <DropdownButton
        id="dropdown-basic-button mp-10"
        title="Bestseller List Category"
        onChange={handleChange(listNameArr, setSubList)}
        >
          <Dropdown.Item key='All Lists' title='All Lists'>All Lists</Dropdown.Item>
          {listList.map(
            (variant) => (
              <Dropdown.Item
                //href={`/dashboard/${variant}`}
                key={variant}
                title={variant}>{variant}</Dropdown.Item>
            )
          )}
        </DropdownButton> 
    )
}

//Set up handle change function to generate sublist for coordinating drop down selection
//Add all section
//Are we able to make this dynamically?
//Connect all components to the subset - even if using all
  //Possibly rename sub to active set?
function handleChange(listNameArr, setSubList) {
  switch (DropdownButton) {
    case "Combined Print and E-Book Fiction":
      setSubList(listNameArr.result.lists[0]);
    case "Combined Print and E-Book Nonfiction":
      //subsect
    case "Hardcover Fiction":
      //subsect
    case "Hardcover Nonfiction":
      //subsect
    case "Trade Fiction Paperback":
      //subsect
    case "Paperback Nonfiction":
      //subsect
    case "Advice How-To and Miscellaneous":
      //subset
    case "Childrens Middle Grade Hardcover":
      //subset
    case "Picture Books":
      //subset
    case "Series Books":
      //subset
    case "Young Adult Hardcover":
      //subset
    case "Audio Fiction":
      //subset
    case "Audio Nonfiction":
      //subset
    case "Business Books":
      //subset
    case "Graphic Books and Manga":
      //subset
    case "Mass Market Monthly":
      //subset
    case "Middle Grade Paperback Monthly":
      //subset
    case "Young Adult Paperback Monthly":
      //subset
  }
}

function listObjectToArr(data) {
    let listNames = [];
    data.forEach((list) => {
      listNames.push(list.list_name);
    });
    console.log(listNames);
    return listNames;
}

export default ListDropdown;
/*
<DropdownButton
id="dropdown-basic-button mp-10"
title="Bestseller List Category"
>
{listNameArr.map((listName, index) => (
  <Dropdown.Item key={index} href="#/">
    {listName}
  </Dropdown.Item>
))}
</DropdownButton>
*/