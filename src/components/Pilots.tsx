import React, { useEffect } from 'react'
import useGetStarshipPilots from '../hooks/useGetStarshipPilots'

// Types
import { StarshipsTypes } from '../starshipsTypes'

type PilotsProps = {
    starship: StarshipsTypes
}

const Pilots: React.FC<PilotsProps> = ({ starship }) => {
    const { pilots, isLoading, error, fetchPilots } =
        useGetStarshipPilots(starship)
    useEffect(() => {
        if (starship.pilots && starship.pilots.length > 0) {
            fetchPilots()
        }
    }, [starship])

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    <h3 className="mb-2">Pilots:</h3>
                    <ul className="flex h-full w-full flex-col items-center justify-center">
                        {pilots.length === 0 && (
                            <li className="w-4/5">
                                No pilots for this one, there are.
                            </li>
                        )}
                        {pilots.map((pilot) => (
                            <li key={pilot.name}>{pilot.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Pilots
