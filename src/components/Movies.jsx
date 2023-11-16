import React from 'react';
import '../styles/Movies.css'
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const Movies = ({title,poster_path,overview,vote_average}) => {
    return (
        <div className='movie'>
            <img src={IMG_URL+poster_path} alt="{title}" />
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
}

export default Movies;
