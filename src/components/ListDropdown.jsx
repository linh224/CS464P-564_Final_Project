import React, {useState, useEffect, createContext, useContext} from "react";
import { Context } from "./Context.js"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function ListDropdown() {
    const {listNameArr, setListsArr, subList, setSubList} = useContext(Context);
    listNameArr.forEach((list) => {
      <Dropdown.Item>
        {list.list_name}
      </Dropdown.Item>
    });
    return (
        <DropdownButton
        id="dropdown-basic-button mp-10"
        title="Bestseller List Category"
        >
        </DropdownButton> 
    )
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