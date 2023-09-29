const AhsokaVideos = () => {
    return (
        <>
            <section
                id="ahsoka-videos"
                className="md:relative md:h-[800px] lg:h-[930px] md:w-[100%]"
            >
                <figure className="md:absolute md:left-0 md:top-0 md:z-0 md:h-full md:w-full">
                    {/* Make sure each image covers the entire section */}
                    <div>
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-tentpole-desktop_87875115.jpeg?region=0,0,1600,600"
                            alt=""
                            className="md:left-0 md:top-0 md:h-auto md:w-full md:object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="/public/ahsoka-tentpole-desktop-gumstick_840a96c4.jpeg"
                            alt=""
                            className="hidden md:left-0 md:top-0 md:block md:h-auto md:w-full md:object-cover"
                        />
                    </div>
                    <div className="md:relative md:bottom-0 md:left-0 md:z-0 md:h-auto md:w-full">
                        <img
                            src="/public/ahsoka-tentpole-anchor-starmap_2cb18246.jpeg"
                            alt=""
                            className="hidden md:left-0 md:top-0 md:block md:h-auto md:w-full md:object-cover"
                        />
                        <div className="flex items-center md:absolute md:bottom-0 md:left-0 md:z-0 md:h-full md:w-full">
                            <ol className="flex w-full justify-evenly gap-6 ">
                                {/* className="md:absolute h-[120px] w-[250px] bg-teal-500 md:bottom-15 md:left-24" */}
                                <li className="flex">
                                    <div className="h-[120px] w-[150px] rounded-l-xl">
                                        <img
                                            src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-106-extras_article-feature_200a55ad.jpeg?region=0%2C0%2C1600%2C900"
                                            alt=""
                                            className="rounded-l-xl object-cover w-auto h-[150px]"
                                        />
                                    </div>
                                    <div className="h-[150px] w-[250px] rounded-r-xl bg-slate-600"></div>
                                </li>
                                <li className="flex">
                                    <div className="h-[120px] w-[150px] rounded-l-xl">
                                        <img
                                            src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-part-6-highlights-_article-feature_648aff7e.jpeg?region=0%2C0%2C1600%2C900"
                                            alt=""
                                            className="rounded-l-xl object-cover w-auto h-[150px]"
                                        />
                                    </div>
                                    <div className="h-[150px] w-[250px] rounded-r-xl bg-slate-600"></div>
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
                                    // className="border border-cyan-500"
                                />
                            </div>
                            <div className="md:text-xl lg:text-3xl">
                                Hera must answer to the New Republic, while far,
                                far away, a reunion takes place.
                            </div>
                            <div className="md:mt-4">
                                <button className="bg-[var(--secondary)] text-[.8rem] text-stone-600 md:rounded-3xl md:px-4 md:py-2 lg:px-8 lg:py-4">
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
