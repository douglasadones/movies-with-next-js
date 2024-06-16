import React, { useState, useEffect } from 'react';

const API_KEY = process.env.API_KEY;

const GetGender = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => setGenres(data.genres))
            .catch(error => console.log(error));
    }, []);

    const getGenreNames = (genreIds) => {
        return genreIds.map(genreId => {
            const genre = genres.find(g => g.id === genreId);
            return genre ? genre.name : null;
        }).filter(name => name != null).join(', ');
    };

    // Substitua 'results' pelo seu estado ou prop que contém os dados dos filmes
    const results = []; // Exemplo de dados

    return (
        <div>
            {results.map(result => (
                <div key={result.id}>
                    <p>Genre: {getGenreNames(result.genre_ids)}</p>
                </div>
            ))}
        </div>
    );
};

export default GetGender;