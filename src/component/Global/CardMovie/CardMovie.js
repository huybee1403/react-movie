import React from "react";
import "./CardMovie.css";
import { Link, useNavigate } from "react-router-dom";

const CardMovie = (props) => {
  return (
    <Link to={`/details/${props.id}`}>
      <div className="card-movie">
        <div className="thumb">
          <img src={`https://image.tmdb.org/t/p/w300${props.img}`} alt="" />
        </div>
        <h3 className="mb-2 mt-2">{props.title}</h3>
        <div className="number d-flex align-items-center justify-content-between">
          <p className="day">{props.date}</p>
          <p className="rate">
            <i className="fa-solid fa-star"></i>
            {props.rate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
