import React, { useEffect } from 'react'
import useGetStarshipsFilms from '../hooks/useGetStarshipsFilms'

//? Types
import { StarshipsTypes } from '../starshipsTypes'

type FilmsProps = {
    starship: StarshipsTypes
}

const Films: React.FC<FilmsProps> = ({ starship }) => {
    const { films, isLoading, error, fetchFilms } =
        useGetStarshipsFilms(starship)

    useEffect(() => {
        if (starship.films && starship.films.length > 0) {
            fetchFilms()
        }
    }, [starship, fetchFilms])

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    <h3 className="mb-2">Films:</h3>
                    <ul>
                        {films.length === 0 && (
                            <li className="w-4/5">
                                No films for this one, there are.
                            </li>
                        )}
                        {films.map((film) => (
                            <li key={film.episode_id}>{film.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Films
