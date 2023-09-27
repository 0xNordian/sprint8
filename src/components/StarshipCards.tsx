import { useState, useEffect } from 'react'
import { useStarshipStore } from '../store/useStarshipStore'
import { useNavigate } from 'react-router-dom'

//? Components
import Button from './Button'
import ProgressBar from './ProgressBar'

//? Types
// import StarshipsTypes from '../starshipsTypes'

const StarshipCards = () => {
    const starships = useStarshipStore((state) => state.starships)
    const isLoading = useStarshipStore((state) => state.isLoading)
    const [page, setPage] = useState(1)

    useEffect(() => {
        useStarshipStore.getState().fetchStarships(page.toString())
        // console.log('starships: ', starships)
    }, [])

    const navigate = useNavigate()

    const handleCardClick = (starshipUrl: string) => {
        navigate(`/starships/${encodeURIComponent(starshipUrl)}`)
    }

    const handleButtonClick = () => {
        const nextPage = page + 1;
        setPage(nextPage)
        useStarshipStore.getState().fetchStarships(nextPage.toString())
    }

    return (
        <section className="">
            <div className="mt-2 flex flex-col justify-center gap-4">
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
                ) : starships && starships.length > 0 ? (
                    starships.map((starship) => (
                        <div
                        key={starship.name}
                        className="h-[5rem] rounded-md bg-gray-700 bg-opacity-40 hover:text-[#E5B848] hover:bg-indigo-600 hover:bg-opacity-50 sm:w-full"
                            onClick={() => handleCardClick(starship.url)}
                        >
                            <div className="flex h-full flex-col items-start justify-center pl-4">
                                <h2>{`${starship.name}`}</h2>
                                <p>{starship.model}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No starships available.</div>
                )}
            </div>
            <ProgressBar page={page}/>
            <div className="flex justify-center items-center">
                <Button
                    msg="Give me more power!"
                    handleButtonClick={handleButtonClick}
                />
            </div>
        </section>
    )
}

export default StarshipCards
