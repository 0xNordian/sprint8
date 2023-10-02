import axios from "axios";
import { useEffect, useState } from "react";
import { StarshipsTypes } from '../starshipsTypes'

type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
};

const useGetStarshipsFilms = (starship: StarshipsTypes) => {
    const [films, setFilms] = useState<Film[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchFilms = async () => {
            setIsLoading(true);
            try {
                const filmPromises = starship.films.map(async (filmUrl) => {
                    const response = await axios.get(filmUrl);
                    if (response.status !== 200) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.data as Film;
                });

                const filmsData = await Promise.all(filmPromises);
                setFilms(filmsData);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                if (error instanceof Error) {
                    setIsLoading(false);
                    setError(error);
                }
            }
        };

        fetchFilms();
    }, [starship]);

    return { films, isLoading, error, fetchFilms: () => {} };
};

export default useGetStarshipsFilms;