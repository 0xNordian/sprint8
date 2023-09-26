import { useEffect } from 'react'
import { useStarshipStore } from '../store/useStarshipStore'
import NavBar from '../components/NavBar'

const Starships = () => {
    const starships = useStarshipStore(state => state.starships)

    useEffect(() => {
        useStarshipStore.getState().fetchStarships()
        // console.log("starships: ", starships)
    }, [])

    return (
        <>
            <NavBar />
            <div className="mt-4">
                <h1>STARSHIPS</h1>
                <div className="bg-slate-500 flex flex-col justify-center items-center mt-4 p-4">
                    <ul>
                        {starships.map((starship) => (
                            <li key={starship.name}>{`${starship.name}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Starships