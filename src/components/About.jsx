import React from "react";
import "../CSS/About.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function About() {
  return (
    <div className="m-auto">
      <h1 className=" text-primary text-center p-3">About Our Team</h1>
      <div className="d-flex justify-content-center">
        <div className="member p-3">
          <div className="">
            <span className="team p-1 fs-2 fw-bold ">Team Members</span>
            <ul className="custom-list fs-6 fw-bold">
              <li>Deana Jackson</li>
              <li>Sienna Day</li>
              <li>Linh Nguyen</li>
            </ul>
          </div>
          <div className="">
            <span className="team p-1 fs-2 fw-bold ">API Used</span>
            <ul className="custom-list fs-6 fw-bold p-3">
              <li>NewYorkTimes API</li>
              <li>Google Book API</li>
            </ul>
          </div>
        </div>
        <div className="chart p-3">
          <div className="pie-chart">
            <Pie
              data={{
                labels: ["JavaScript", "HTML", "CSS"],
                datasets: [
                  {
                    label: "Languages",
                    data: [62.1, 23.2, 14.7], //get data from GitHub
                    backgroundColor: [
                      "rgba(54, 162, 235, 0.8)",
                      "rgba(255, 206, 86, 0.8)",
                      "rgba(255, 99, 132, 0.8)",
                    ],
                    borderColor: [
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(255, 99, 132, 1)",
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
