import { useEffect } from 'react'
import { useStarshipStore } from '../store/useStarshipStore'
import { useNavigate } from 'react-router-dom'

const StarshipCards = () => {
    const starships = useStarshipStore((state) => state.starships)
    const isLoading = useStarshipStore((state) => state.isLoading)

    useEffect(() => {
        useStarshipStore.getState().fetchStarships()
        console.log('starships: ', starships)
    }, [])

    const navigate = useNavigate()

    const handleCardClick = (starshipUrl: string) => {
        navigate(`/starships/${encodeURIComponent(starshipUrl)}`)
    }

    return (
        <section className="">
            <div className="mt-4 flex flex-col justify-center gap-4">
                {isLoading ? (
                    <div>
                        <div
                            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status"
                        >
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                Loading...
                            </span>
                        </div>
                    </div>
                ) : (
                    starships.map((starship) => (
                        <div
                            key={starship.name}
                            className="h-[5rem] rounded-md bg-gray-700 bg-opacity-40 hover:bg-gray-500 hover:bg-opacity-50 sm:w-full"
                            onClick={() => handleCardClick(starship.url)}
                        >
                            <div className="flex h-full flex-col items-start justify-center pl-4">
                                <h2>{`${starship.name}`}</h2>
                                <p>{starship.model}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}

export default StarshipCards
