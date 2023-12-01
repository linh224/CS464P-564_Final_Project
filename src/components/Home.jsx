import React from "react";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="home p-5">
      <div className="welcome ">
        <h1 className=" text-light text-center fs-3 p-4">
          WELCOME TO THE BESTSELLERS DASHBOARD
        </h1>
        <main>
          <section>
            <div className="member">
              <ul className="custom-list homepage-list">
                <li>
                  Visit the <span>Dashboard page</span> to see key metrics on
                  the current New York Times Bestsellers lists.
                </li>
                <li>
                  Check out the <span>Bestsellers page</span> to learn more
                  about the #1 bestseller in each category.
                </li>
                <li>
                  Learn more about us and the project on the <span>About</span>{" "}
                  and <span>Contact pages.</span>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
