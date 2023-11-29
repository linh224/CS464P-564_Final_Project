import React from "react";

export function Card(props) {
  return (
    <div className="count-card">
      <h2>{props.count}</h2>
      <p>{props.cardTitle}</p>
    </div>
  );
}
