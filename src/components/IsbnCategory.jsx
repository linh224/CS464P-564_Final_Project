import React from "react";
import { useState, useEffect } from "react";
import BookView from "./BookView";

function IsbnCategory() {
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

  const handleClick = (event) => {
    const name = event.target.textContent;
    const currentCard = event.target;

    const className = event.target.className;

    let hasClickedClass = className.includes("clicked-div");

    if (!hasClickedClass) {
      //Remove all clicked-div class from other elements
      const otherCards = document.querySelectorAll(".card.clicked-div");
      otherCards.forEach((card) => {
        card.classList.remove("clicked-div");
      });

      // If not present, add the class to the current element
      currentCard.classList.add("clicked-div");
    }

    setClickedName(name);
  };

  return (
    <div className="d-flex w-100">
      <div className="left-side col-sm-2">
        <span className="text-primary text-center fs-3 p-3 fw-bold">
          All Category
        </span>
        <div className="all-name-category">
          {category.map((currentCategory, index) => (
            <div
              onClick={handleClick}
              className={`card text-dark p-1`}
              id={currentCategory.list_id}
              key={index}
            >
              {currentCategory.list_name}
            </div>
          ))}
        </div>
      </div>
      <div className="chart-week-on-list w-50 h-50 bg-light">
        {clickedName && <BookView data={category} name={clickedName} />}
      </div>
    </div>
  );
}

export default IsbnCategory;