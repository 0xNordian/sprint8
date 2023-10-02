import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//? Components
import NavBar from '../components/NavBar'
import Films from '../components/Films'

//? Stores
import { useStarshipStore } from '../stores/useStarshipStore'

//? Types
import { StarshipsTypes } from '../starshipsTypes'
import Pilots from '../components/Pilots'
import Footer from '../components/Footer'

const StarshipDetails = () => {
    const [starshipData, setStarshipData] = useState({} as StarshipsTypes)
    const { starshipdetails = '' } = useParams()
    const starships = useStarshipStore((state) => state.starships)
    const decodedStarshipName = decodeURIComponent(starshipdetails)
    const startshipImgId = decodedStarshipName.slice(32, -1)

    const showLogger = true
    const showNavMenu = false

    useEffect(() => {
        const matchingStarship = starships.find(
            (starship) => starship.url === decodedStarshipName,
        )
        if (matchingStarship) {
            setStarshipData(matchingStarship)
        } else {
            throw new Error('No matching starship found')
        }
    }, [starships, decodedStarshipName])

    return (
        <>
            <div className="starship-detail-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="content-ships">
                    <section className="flex h-full w-full flex-col items-center justify-center pb-8">
                        <div className="mt-6 w-10/12 ">
                            <NavBar
                                showLogger={showLogger}
                                showNavMenu={showNavMenu}
                            />
                        </div>
                        <div className="flex h-full w-full flex-col items-center gap-6">
                            <section className="flex flex-col items-center gap-y-4">
                                <div className="my-12">
                                    <h1>{starshipData.name}</h1>
                                </div>
                                <figure className="mb-10 p-2">
                                    <img
                                        src={
                                            startshipImgId === '10'
                                                ? '/millenium-falcon.png'
                                                : `https://starwars-visualguide.com/assets/img/starships/${startshipImgId}.jpg`
                                        }
                                        alt={starshipData.name}
                                        onError={(e) => {
                                            const imgElement =
                                                e.target as HTMLImageElement
                                            imgElement.src =
                                                '/starwars-no-picture-found.jpeg'
                                        }}
                                    />
                                </figure>
                            </section>
                            <article className="container mx-auto px-4 py-8 sm:py-12">
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="bg-transpatent rounded-lg p-4 shadow-md">
                                        <h2 className="text-xl font-semibold">
                                            Starship Information
                                        </h2>
                                        <ul className="mt-4 text-sm">
                                            <li>
                                                <strong>Model:</strong>{' '}
                                                {starshipData.model}
                                            </li>
                                            <li>
                                                <strong>Starship Class:</strong>{' '}
                                                {starshipData.starship_class}
                                            </li>
                                            <li>
                                                <strong>Manufacturer:</strong>{' '}
                                                {starshipData.manufacturer}
                                            </li>
                                            <li>
                                                <strong>Cost:</strong>{' '}
                                                {starshipData.cost_in_credits}{' '}
                                                credits
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-transpatent rounded-lg p-4 shadow-md">
                                        <h2 className="text-xl font-semibold">
                                            Capacity & Crew
                                        </h2>
                                        <ul className="mt-4 text-sm">
                                            <li>
                                                <strong>Crew:</strong>{' '}
                                                {starshipData.crew}
                                            </li>
                                            <li>
                                                <strong>
                                                    Passenger Capacity:
                                                </strong>{' '}
                                                {starshipData.passengers}
                                            </li>
                                            <li>
                                                <strong>Cargo Capacity:</strong>{' '}
                                                {starshipData.cargo_capacity}
                                            </li>
                                            <li>
                                                <strong>Consumables:</strong>{' '}
                                                {starshipData.consumables}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-transpatent rounded-lg p-4 shadow-md">
                                        <h2 className="text-xl font-semibold">
                                            Speed & Ratings
                                        </h2>
                                        <ul className="mt-4 text-sm">
                                            <li>
                                                <strong>Length:</strong>{' '}
                                                {starshipData.length}
                                            </li>
                                            <li>
                                                <strong>
                                                    Max Atmosphere Speed:
                                                </strong>{' '}
                                                {
                                                    starshipData.max_atmosphering_speed
                                                }
                                            </li>
                                            <li>
                                                <strong>
                                                    Hyperdrive Rating:
                                                </strong>{' '}
                                                {starshipData.hyperdrive_rating}
                                            </li>
                                            <li>
                                                <strong>
                                                    Max Speed in Real Space:
                                                </strong>{' '}
                                                {starshipData.MGLT}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <section className="mt-8">
                                    <div className="text-center text-lg font-semibold">
                                        Additional Information
                                    </div>
                                    {starshipData && (
                                        <div className="mt-4 flex justify-center space-x-8">
                                            <div>
                                                <Films
                                                    starship={starshipData}
                                                />
                                            </div>
                                            <div>
                                                <Pilots
                                                    starship={starshipData}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </section>
                            </article>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default StarshipDetails
