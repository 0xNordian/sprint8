import { useEffect } from 'react'
import { useStarshipStore } from '../store/useStarshipStore'

const Starships = () => {
    const starships = useStarshipStore(state => state.starships)

    useEffect(() => {
        useStarshipStore.getState().fetchStarships()
        // console.log("starships: ", starships)
    }, [])

    return (
        <>
            <h1>STARSHIPS</h1>
            <div className="bg-slate-500 flex flex-col justify-center items-center">
                <ul>
                    {starships.map((starship) => (
                        <li key={starship.name}>{`${starship.name}`}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Starships