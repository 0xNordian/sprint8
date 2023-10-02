import axios from "axios";
import { useEffect, useState } from "react";
import { StarshipsTypes } from '../starshipsTypes';

type Pilot = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    created: string;
    edited: string;
    url: string;
};

const useGetStarshipPilots = (starship: StarshipsTypes) => {
    const [pilots, setPilots] = useState<Pilot[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPilots = async () => {
            setIsLoading(true);
            try {
                const pilotPromises = starship.pilots.map(async (pilotUrl) => {
                    const response = await axios.get(pilotUrl);
                    if (response.status !== 200) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.data as Pilot;
                });

                const pilotsData = await Promise.all(pilotPromises);
                setPilots(pilotsData);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                if (error instanceof Error) {
                    setIsLoading(false);
                    setError(error);
                }
            }
        };

        fetchPilots();
    }, [starship]);

    return { pilots, isLoading, error, fetchPilots: () => {} };
};

export default useGetStarshipPilots;
