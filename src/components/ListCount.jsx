import React from "react";
import { Context } from "./Context.js"
import {useContext } from 'react'

//Some sort of fun runtime error
//If you run without fetch and then update with fetch it is happy, but on reload it will give the error
	//"Cannot read properties of undefined (reading 'books')"
//I assume some sort of async/await error in context
//It seems like ListCount is running before the API data is actually in the context

//Sample test, not connected to dropdown switchcase yet
//Default to first list in list of lists
/*
function ListCount() {
    const {listNameArr, setListsArr, subList, setSubList} = useContext(Context)
    const numResults = listNameArr[0].books.length;
    return(
        <section className="dashboard-visual-container">
          <div className="card-visual">
            <h2>{numResults}</h2>
            <p>Count of NYT Bestsellers</p>
          </div>
        </section>
    );
}

export default ListCount;
*/
export default function ListCount() {}