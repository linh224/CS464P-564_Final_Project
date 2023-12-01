import React from "react";
import "../CSS/About.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function About() {
  return (
    <div className="m-auto">

      <h1 className=" text text-center p-3" style={{color: 'var(--salmon)', fontFamily: 'Cocogoose'}}>About Our Team</h1>

      <div className="d-flex justify-content-center">
        <div className="member p-3">
          <div className="">
            <span className="team p-1 fs-2 fw-bold" style={{backgroundColor: 'var(--darkest-orange)', color: 'white'}}>Team Members</span>
            <ul className="custom-list fs-6 fw-bold">
              <li>Deana Jackson</li>
              <li>Sienna Day</li>
              <li>Linh Nguyen</li>
            </ul>
          </div>
          <div className="">

            <span className="team p-1 fs-2 fw-bold " style={{backgroundColor: 'var(--darkest-orange)', color: 'white'}}>APIs Used</span>

            <ul className="custom-list fs-6 fw-bold p-3">
              <li>New York Times Bestsellers API</li>
              <li>Google Books API</li>
            </ul>
          </div>
        </div>
        <div className="chart p-3">
          <div className="pie-chart">
            <Pie
              data={{
                labels: ["Deana", "Linh", "Sienna"],
                datasets: [
                  {

                    label: "Count",
                    data: [1, 1, 1], //get data from GitHub
                    //Swapped github data for silly chart of counts of us in group
                    backgroundColor: [
                      '#ffd888',
                      '#fdc583',
                      '#fab27b',
                      '#f89f76',
                      '#f68d71',
                      '#f47b6b',
                    ],
                    borderColor: [
                      '#ffd888',
                      '#fdc583',
                      '#fab27b',
                      '#f89f76',
                      '#f68d71',
                      '#f47b6b',
                    ],

                    borderWidth: 1,
                  },
                ],
              }}
              height={200}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
