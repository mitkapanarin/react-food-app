import React from 'react'

const Cards = ({label, image, calories, source}) => {
  return (
    <div className="card col-3">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{label}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <p>Calories: {calories}</p>
    <p>Source: {source}</p>
  </div>
</div>
  )
}

export default Cards