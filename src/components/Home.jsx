import React from "react";
import "../CSS/Home.css";
import library from "../img/library2.png"

function Home() {
  return (
    <div className="m-auto ">
      <div className="container ">
        <header>
          <h1 className="welcome text-dark text-center p-5">
            WELCOME TO OUR LIBRARY
          </h1>
        </header>
        <main>
        {/* <div>
          <img
            className="bg-image"
            alt=""
            src={library}
            height="100vh"
          />
        </div> */}
          <section>
            <p className="intro text-center fs-5 fw-bold">
              You may explore some fascinating about our books.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
