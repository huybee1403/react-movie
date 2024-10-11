import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import CardMovie from "../../../Global/CardMovie/CardMovie"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./ListMovies.css"
import useFetch from "../../../../features/useFetch";


const ListMovies = (props) => {
    const API_KEY = "e9e9d8da18ae29fc430845952232787c"
    const movie = useFetch(`https://api.themoviedb.org/3/movie/${props.data}?api_key=${API_KEY}&page=1`);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className="list-movie">
            <Container className="mt-5">
                <div className="headline mb-4">
                    <h3>ONLINE STREAMING</h3>
                    <h2>{props.title}</h2>
                </div>
                <Slider {...settings}>
                    {movie.map((item) => (
                        <div key={item.id} className="slider-item">
                            <CardMovie id={item.id} img={item.poster_path} title={item.original_title} date={item.release_date} rate={item.vote_average}></CardMovie>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}

export default ListMovies
