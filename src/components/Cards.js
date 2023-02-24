import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ label, image, calories, source, id }) => {
  return (
    <div className="card col-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{label}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`/Recipe/${id}`} className="btn btn-primary">
          View recepie
        </Link>
        <p>Calories: {calories}</p>
        <p>Source: {source}</p>
      </div>
    </div>
  );
};

export default Cards;
