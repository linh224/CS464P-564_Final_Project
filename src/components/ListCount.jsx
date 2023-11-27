import React from "react";
import { Context } from "./Context.js"
import {useContext } from 'react'

//Sample test, not connected to dropdown switchcase yet
//Default to first list in list of lists
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