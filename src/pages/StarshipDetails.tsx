import NavBar from '../components/NavBar'

const StarshipDetails = () => {
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
                                    <h1>STARTSHIP NAME</h1>
                                </div>
                                <figure className="mb-10 p-2">
                                    <img
                                        src="/public/millenium-falcon.png"
                                        alt=""
                                        // className="h-[140px] w-[220px] bg-green-500"
                                    />
                                </figure>
                            </section>
                            <article className="">
                                <ul className="text-md sm:text-lg md:text-xl lg:text-2xl">
                                    <li>
                                        <strong>Model:</strong> Lorem ipsum
                                        dolor sit.
                                    </li>
                                    <li>
                                        <strong>Starship Class:</strong> Lorem
                                        ipsum dolor sit.
                                    </li>
                                    <li>
                                        <strong>Manufacturer:</strong> Lorem
                                        ipsum dolor sit.
                                    </li>
                                    <li>
                                        <strong>Cost:</strong> Lorem ipsum dolor
                                        sit.
                                    </li>
                                </ul>
                            </article>

                            <section className="mt-4 flex flex-col gap-8">
                                <div>
                                    <ul className="text-md sm:text-lg md:text-xl lg:text-2xl">
                                        <li>
                                            <strong>Crew:</strong> 4
                                        </li>
                                        <li>
                                            <strong>Passenger Capacity:</strong>{' '}
                                            6
                                        </li>
                                        <li>
                                            <strong>Cargo Capacity:</strong>{' '}
                                            100000 TONS
                                        </li>
                                        <li>
                                            <strong>Consumables:</strong> 2
                                            Months
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="text-md sm:text-lg md:text-xl lg:text-2xl">
                                        <li>
                                            <strong>Length:</strong> 34.37
                                            METERS
                                        </li>
                                        <li>
                                            <strong>
                                                Max Atmosphere Speed:
                                            </strong>{' '}
                                            1050 KM/H
                                        </li>
                                        <li>
                                            <strong>Hyperdrive Rating:</strong>{' '}
                                            5
                                        </li>
                                        <li>
                                            <strong>
                                                Max Speed in Real Space:
                                            </strong>{' '}
                                            75 MGLT
                                        </li>
                                    </ul>
                                </div>
                            </section>
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
