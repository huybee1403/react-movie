import React, { useState } from "react";
import useFetch from "../../../features/useFetch";
import { Button, Col, Container, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './DetailsMovie.css'

const DetailsMovie = () => {
  const { slug: movieID } = useParams();
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const detailsMovie = useFetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`);
  const trailerMovie = useFetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`)
  const trailer = trailerMovie.find((item) => item.type === "Trailer")
  console.log(trailer);
 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="details-movies">
      <Container className="mt-5 mb-5 d-flex flex-row">
        <Col lg={4}>
          <img src={`https://image.tmdb.org/t/p/w300${detailsMovie.poster_path}`} alt="" />
        </Col>
        <Col lg={8} className="ms-5">
          <h3 className="title">{detailsMovie.title}</h3>
          <div className="infor d-flex flex-row mt-3">
            <div className="date">2024-09-04</div>
            <div className="type">{detailsMovie.genres && detailsMovie.genres.map((item) => (item.name)).join(",")}</div>
            <div className="time">
              <i className="fa-regular fa-clock"></i> {detailsMovie.runtime} min
            </div>
          </div>
          <div className="rate d-flex flex-row mt-4 align-items-center">
            <div className="score">{detailsMovie.vote_average}</div>
            <div className="user-score">user score</div>
            <Button variant="primary" onClick={handleShow}>
              Play Trailer
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
              <iframe 
                  width="100%" 
                  height="615" 
                  src={`https://www.youtube.com/embed/${trailer && trailer.key}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
              </iframe>
              </Modal.Body>
            </Modal>
          </div>
          <p className="mt-3">Can You Bury Your Past?</p>
          <div className="overview">
            <h4>Overview</h4>
            <p>
             {detailsMovie.overview}
            </p>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default DetailsMovie;
