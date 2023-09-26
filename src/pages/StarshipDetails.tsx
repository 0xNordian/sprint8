import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//? Components
import NavBar from '../components/NavBar'

//? Stores
import { useStarshipStore } from '../store/useStarshipStore'

//? Types
import { StarshipsTypes } from '../starshipsTypes'

const StarshipDetails = () => {
    const [starshipData, setStarshipData] = useState({} as StarshipsTypes)
    const { starshipdetails = '' } = useParams()
    const starships = useStarshipStore((state) => state.starships)
    const decodedStarshipName = decodeURIComponent(starshipdetails)
    const startshipImgId = decodedStarshipName.slice(32, -1)
    console.log('startshipImgId: ', startshipImgId)
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
                            <NavBar />
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
                                                ? '/public/millenium-falcon.png'
                                                : `https://starwars-visualguide.com/assets/img/starships/${startshipImgId}.jpg`
                                        }
                                        alt={starshipData.name}
                                    />
                                </figure>
                            </section>
                            <article className="">
                                <ul className="text-md sm:text-lg md:text-xl lg:text-2xl">
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
                                        {starshipData.cost_in_credits}
                                        sit.
                                    </li>
                                </ul>
                            </article>

                            <article className="mt-4 flex flex-col gap-8">
                                <div>
                                    <ul className="text-md sm:text-lg md:text-xl lg:text-2xl">
                                        <li>
                                            <strong>Crew:</strong>{' '}
                                            {starshipData.crew}
                                        </li>
                                        <li>
                                            <strong>Passenger Capacity:</strong>{' '}
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

                                <div>
                                    <ul className="text-md sm:text-lg md:text-xl lg:text-2xl">
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
                                            <strong>Hyperdrive Rating:</strong>{' '}
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
                            </article>
                            <section>
                                <div className="text-md sm:text-lg md:text-xl lg:text-2xl">
                                    <p>Pilots:</p>
                                </div>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default StarshipDetails
