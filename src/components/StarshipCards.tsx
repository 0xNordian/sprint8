import { useEffect } from 'react'
import { useStarshipStore } from '../store/useStarshipStore'
import { Link } from 'react-router-dom'

//? Pages
// import StarshipDetails from '../pages/StarshipDetails'

const StarshipCards = () => {
    const starships = useStarshipStore((state) => state.starships)

    useEffect(() => {
        useStarshipStore.getState().fetchStarships()
        console.log('starships: ', starships)
    }, [])

    return (
        <section className="">
            <div className="mt-4 flex flex-col justify-center gap-4">
                {starships.map((starship) => (
                    <Link to={`starshipdetails`} key={starship.name}>
                        <div
                            key={starship.name}
                            className="h-[5rem] rounded-md bg-gray-700 bg-opacity-50 sm:w-full"
                        >
                            <div className="flex h-full flex-col items-start justify-center pl-4">
                                <h2>{`${starship.name}`}</h2>
                                <p>{starship.model}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default StarshipCards
