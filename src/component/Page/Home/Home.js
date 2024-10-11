import React from "react"
import ListMovies from "./ListMovies/ListMovies"
import Banner from "./Banner/Banner"

const Home = () => {
    const arrMovie = [
        {
            id: 1,
            title: "Now Playing Movie",
            data: "now_playing",
        },
        {
            id: 2,
            title: "Upcoming Movie",
            data: "upcoming",
        },
        {
            id: 3,
            title: "Top Rated Movie",
            data: "top_rated",
        },
    ]
    return (
        <>
            <Banner></Banner>
            {arrMovie.map((item) => (
                <ListMovies key={item.id} id={item.id} title={item.title} data={item.data}></ListMovies>
            ))}
        </>
    )
}

export default Home
