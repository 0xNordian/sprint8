const AhsokaVideos = () => {
    return (
        <>
            <section
                id="ahsoka-videos"
                className="md:relative md:h-[580px] md:w-[100%] lg:h-[780px] xl:h-[980px]"
            >
                <figure className="md:absolute md:left-0 md:top-0 md:z-0 md:h-full md:w-full">
                    <div>
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-tentpole-desktop_87875115.jpeg?region=0,0,1600,600"
                            alt=""
                            className="md:left-0 md:top-0 md:h-auto md:w-full md:object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="ahsoka-tentpole-desktop-gumstick_840a96c4.jpeg"
                            alt=""
                            className="hidden md:left-0 md:top-0 md:block md:h-auto md:w-full md:object-cover"
                        />
                    </div>
                    <div className="md:relative md:bottom-0 md:left-0 md:z-0 md:h-auto md:w-full">
                        <img
                            src="ahsoka-tentpole-anchor-starmap_2cb18246.jpeg"
                            alt=""
                            className="hidden md:left-0 md:top-0 md:block md:h-auto md:w-full md:object-cover"
                        />
                        <div className="hidden items-center md:absolute md:bottom-0 md:left-0 md:z-0 md:flex md:h-full md:w-full">
                            <ol className="flex w-full flex-col justify-evenly gap-6 md:flex md:flex-row ">
                                <li className="flex">
                                    <section>
                                        <div className="flex items-center justify-start">
                                            <img
                                                src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-106-extras_article-feature_200a55ad.jpeg?region=0%2C0%2C1600%2C900"
                                                alt=""
                                                className="h-[120px] w-[140px] rounded-s-lg object-cover md:h-[130px] md:w-[150px] lg:h-[180px] lg:w-[200px]"
                                            />

                                            <div className="relative flex h-[120px] w-[150px] md:h-[130px] md:w-[160px] lg:h-[180px] lg:w-[240px] flex-col rounded-e-lg bg-[#1D1E1F] px-[25px]">
                                                <div className="h-full w-full">
                                                    <div className="flex h-1/2 items-center justify-center">
                                                        <h4 className="pt-4 text-left text-[.6rem] md:text-[.7rem] lg:text-[1.1rem] text-white">
                                                            <strong>
                                                                Ahsoka Extras:
                                                                “Part Six: Far,
                                                                Far Away{' '}
                                                            </strong>
                                                        </h4>
                                                    </div>
                                                    <div className="relative h-1/2 w-full">
                                                        <div className="absolute bottom-0 right-0 h-[10px] w-[85px] rounded-t-lg bg-[#1D2730]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>

                                <li className="flex">
                                    <section>
                                        <div className="flex items-center justify-start">
                                            <img
                                                src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-part-6-highlights-_article-feature_648aff7e.jpeg?region=0%2C0%2C1600%2C900"
                                                alt=""
                                                className="h-[120px] w-[140px] rounded-s-lg object-cover md:h-[130px] md:w-[150px] lg:h-[180px] lg:w-[200px]"
                                            />

                                            <div className="relative flex h-[120px] w-[150px] md:h-[130px] md:w-[160px] lg:h-[180px] lg:w-[240px] flex-col rounded-e-lg bg-[#1D1E1F] px-[25px]">
                                                <div className="h-full w-full">
                                                    <div className="flex h-1/2 items-center justify-center">
                                                        <h4 className="pt-4 text-left text-[.6rem] md:text-[.7rem] lg:text-[1.1rem] text-white">
                                                            <strong>
                                                                Ahsoka Analyzed:
                                                                5 Highlights
                                                                from “Part Six:
                                                                Far, Far Away”{' '}
                                                            </strong>
                                                        </h4>
                                                    </div>
                                                    <div className="relative h-1/2 w-full">
                                                        <div className="absolute bottom-0 right-0 h-[10px] w-[85px] rounded-t-lg bg-[#1D2730]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            </ol>
                        </div>
                    </div>
                </figure>

                <article className="md:relative md:z-10 md:h-full md:w-full">
                    <div
                        id="ahsoka-header"
                        className="md:flex md:h-auto md:items-center md:justify-end md:px-4 lg:px-0"
                    >
                        <div className="flex flex-col gap-6 p-8 md:w-[45%] md:gap-0 md:rounded-lg md:bg-opacity-90">
                            <div className="md:scale-[70%]">
                                <img
                                    src="https://lumiere-a.akamaihd.net/v1/images/107-ahsoka-logotitle-800_1ee3f65b.png?region=0,0,800,445"
                                    alt="Ahsoka Logo"
                                    id="ahsoka-logo"
                                />
                            </div>
                            <div className="md:text-xl lg:mb-4 lg:text-2xl">
                                Ahsoka Tano investigates an emerging threat to
                                the galaxy.
                            </div>
                            <div className="md:mt-4">
                                <button className="bg-[var(--secondary)] text-[.8rem] text-stone-600 md:rounded-3xl md:px-4 md:py-2 lg:px-8 lg:py-3">
                                    STREAM NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default AhsokaVideos
