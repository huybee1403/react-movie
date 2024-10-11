import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardMovie from '../../Global/CardMovie/CardMovie';
import './Movies.css'
import useFetch from '../../../features/useFetch';
import { useParams } from 'react-router-dom';
import { Prev } from 'react-bootstrap/esm/PageItem';

const Movies = () => {
    const { slug: keySearch } = useParams();
    const [page, setPage] = useState(1)
    const API_KEY = "e9e9d8da18ae29fc430845952232787c"
    const movies = useFetch(!keySearch ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}` : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=${page}`)
    const [allMovie , setAllMovie] = useState(movies)

    useEffect(() => {
        if (!keySearch) {
           setAllMovie(movies)
        } else {
            setAllMovie(movies);
        }
        setPage(1)
    }, [movies, keySearch])
    
    useEffect(() => {
        setAllMovie((prevMovies) => [...prevMovies, ...movies])
    },[page])

    return (
        <div className="movies">
            <Container>
                <div className="headline mb-4">
                    <h3>ONLINE STREAMING</h3>
                    <h2>List Movie</h2>
                </div>
                <Row>
                    {allMovie.map((item) => (
                        <Col lg={3} key={item.id}>
                            <CardMovie id={item.id} img={item.poster_path} title={item.original_title} date={item.release_date} rate={item.vote_average}></CardMovie>
                        </Col>
                    ))}
                </Row>
                <div className="show-more">
                    <i className="fa-solid fa-play"></i>
                    <button onClick={() => setPage(page + 1)}>Show More</button>
                </div>
            </Container>
        </div>
    );
};

export default Movies;