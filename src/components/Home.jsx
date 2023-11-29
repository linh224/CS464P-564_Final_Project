import React from "react";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="home p-5">
      <div className="welcome ">
        <h1 className=" text-light text-center fs-3 p-5">
          WELCOME TO OUR LIBRARY
        </h1>
        <main>
          <section>
            <span className="intro text-center text-light fs-5 fw-bold">
              You may explore some fascinating about our books.
            </span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
