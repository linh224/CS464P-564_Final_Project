import React from "react";
import { useState, useEffect } from "react";
import BarChart from "./BarChart.jsx";


function Category() {
  useEffect(() => {
    const url =
      "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let listOfData = data.results.lists;
        console.log("linh", data);
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
    <div className="d-flex w-75">
      <div className="left-side col-sm-4">
        <span className="text-primary text-center fs-3 p-3 fw-bold">
          All Category
        </span>
        <div className="all-name-category">
          {category.map((currentCategory, idex) => (
            <div
              onClick={handleLiClick}
              className="card text-dark p-1"
              key={idex}
            >
              <p>{currentCategory.list_name} </p>
            </div>
          ))}
        </div>
       
      </div>
      <div className="chart-week-on-list w-50 h-50 bg-light">
        {clickedName && <BarChart data={category} name={clickedName} />}
      </div>
    </div>
  );
}

export default Category;
