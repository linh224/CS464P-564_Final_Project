import React from "react";

export function Book(props) {
  return (
    <div className="book-card">
      <a href={props.previewLink} target="_blank" rel="noreferrer">
        <img src={props.img} alt="Thumbnail of Book Cover" />
      </a>
      <div className="search--text">
        <h2>{props.title}</h2>
        <h3>By {props.author}</h3>
        <p>
          <span>Publication Date:</span> {props.publishedDate}
        </p>
        <p>
          <span>Publisher:</span> {props.publisher}
        </p>
        <p>{props.description}</p>

        <a href={props.previewLink} target="_blank" rel="noreferrer">
          <button className="btn btn-warning">Learn More</button>
        </a>
      </div>
    </div>
  );
}
