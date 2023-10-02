import { useState, useEffect } from 'react'
import { useStarshipStore } from '../stores/useStarshipStore'
import { useNavigate } from 'react-router-dom'
// import { useAuthStore } from '../stores/useAuthStore'

//? Components
import Button from './Button'
import ProgressBar from './ProgressBar'

const StarshipCards = () => {
    const starships = useStarshipStore((state) => state.starships)
    const isLoading = useStarshipStore((state) => state.isLoading)
    // const isLoading = useStarshipStore((state) => state.isLoading)
    const [page, setPage] = useState(1)

    // const authStore = useAuthStore()

    useEffect(() => {
        useStarshipStore.getState().fetchStarships(page.toString())
        // console.log('starships: ', starships)
    }, [])

    const navigate = useNavigate()

    const handleCardClick = (starshipUrl: string) => {
        navigate(`/starships/${encodeURIComponent(starshipUrl)}`)
    }

    const handleIncreaseClick = () => {
        const nextPage = page + 1
        setPage(nextPage)
        useStarshipStore.getState().fetchStarships(nextPage.toString())
    }

    const handleDecreaseClick = () => {
        const backPage = page - 1
        setPage(backPage)
        useStarshipStore.getState().fetchStarships(backPage.toString())
    }

    const handleClickedStep = (clickedPage: number) => {
        setPage(clickedPage)
        useStarshipStore.getState().fetchStarships(clickedPage.toString())
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
                            className="h-[5rem] rounded-md bg-gray-700 bg-opacity-40 hover:bg-indigo-600 hover:bg-opacity-50 hover:text-[#E5B848] sm:w-full"
                            onClick={() => handleCardClick(starship.url)}
                        >
                            <div className="flex h-full flex-col items-start justify-center pl-4">
                                <h3>{`${starship.name}`}</h3>
                                <p>{starship.model}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No starships available.</div>
                )}
            </div>
            <div className="flex flex-col items-center justify-center sm:block">
                <ProgressBar
                    page={page}
                    handleClickedStep={handleClickedStep}
                />
                <div className="flex items-center justify-center gap-12">
                    {page <= 4 && page > 1 && (
                        <Button
                            msg="previous"
                            handleButtonClick={handleDecreaseClick}
                        />
                    )}
                    {page >= 1 && page < 4 && (
                        <Button
                            msg="next"
                            handleButtonClick={handleIncreaseClick}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default StarshipCards
