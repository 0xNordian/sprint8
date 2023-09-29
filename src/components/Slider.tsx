// import ButtonForm from './ButtonForm'

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-10 h-[80%] w-[90%]">
                        <div className="flex h-full w-5/12 flex-col items-center justify-center gap-1">
                            <div className="mt-0 flex h-1/3 w-full justify-center ">
                                <img
                                    src="https://lumiere-a.akamaihd.net/v1/images/107-ahsoka-logotitle-800_1ee3f65b.png?region=0,0,800,445"
                                    alt="Ahsoka Logo"
                                    id="ahsoka-logo"
                                    className="z-10 w-3/6"
                                />
                            </div>
                            <div className="px-1 text-[.3rem] md:px-8 md:py-1 md:text-[0.7rem] lg:px-10 lg:py-2 lg:text-[1.1rem]">
                                Hera must answer to the New Republic, while far, far away, a reunion takes place.
                            </div>
                            <div className="flex w-full justify-center ">
                                <button className="rounded-3xl bg-[var(--secondary)] text-[.3rem] text-stone-600 md:text-[0.5rem] lg:text-[0.8rem]">
                                    STREAM NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-episode-107-hero-desktop_470f5f96.jpeg?region=0,0,1600,686"
                        alt="Ahsoka Banner"
                        id="ahsoka-banner-1"
                        className="z-1 relative w-full"
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between sm:flex ">
                    <a href="#slide4" className="lg:btn lg:btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="lg:btn lg:btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-10 h-[80%] w-[90%]">
                        <div className="flex h-full w-5/12 flex-col items-center justify-center gap-1">
                            <div className=" px-0 text-[.3rem] md:px-8 md:py-1 md:text-[0.7rem] lg:px-10 lg:py-2 lg:text-[1.1rem]">
                                <h2>
                                    <strong>
                                        Ahsoka Tano Arrives in Fortnite
                                    </strong>
                                </h2>
                            </div>
                            <div className="px-1 text-[.3rem] md:px-8 md:py-1 md:text-[0.7rem] lg:px-10 lg:py-2 lg:text-[1.1rem]">
                                The legendary Jedi is now unlockable in
                                Fortnite's latest Battle Pass.
                            </div>
                            <div className="flex w-full justify-center ">
                                <button className="rounded-3xl bg-[var(--secondary)] text-[.3rem] text-stone-600 md:text-[0.5rem] lg:text-[0.8rem]">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-hero-sashsingle-hero-desktop_9e40f89d.jpeg?region=0,0,2048,878"
                        alt="Ahsoka Banner"
                        id="ahsoka-banner-1"
                        className="z-1 relative w-full"
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between sm:flex ">
                    <a href="#slide1" className="lg:btn lg:btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="lg:btn lg:btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-10 h-[80%] w-[90%]">
                        <div className="flex h-full w-5/12 flex-col items-center justify-center gap-1">
                            <div className=" px-1 text-[.2rem] md:px-8 md:py-1 md:text-[0.7rem] lg:px-10 lg:py-2 lg:text-[1.1rem]">
                                <h2>
                                    <strong>
                                        How the ILM Model Shop Brought Ahsoka’s
                                        T-6 to Life
                                    </strong>
                                </h2>
                            </div>
                            <div className="px-1 text-[.3rem] md:px-8 md:py-1 md:text-[0.7rem] lg:px-10 lg:py-2 lg:text-[1.1rem]">
                                Go behind the scenes with Industrial Light &
                                Magic model maker John Goodson to explore
                                Ahsoka’s Jedi shuttle.
                            </div>
                            <div className="flex w-full justify-center ">
                                <button className="rounded-3xl bg-[var(--secondary)] text-[.3rem] text-stone-600 md:text-[0.5rem] lg:text-[0.8rem]">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-t6-shuttle-goodson-hero-desktop_6b679008.jpeg?region=0,0,2048,878"
                        alt="Ahsoka Banner"
                        id="ahsoka-banner-1"
                        className="z-1 relative w-full"
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between sm:flex ">
                    <a href="#slide2" className="lg:btn lg:btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="lg:btn lg:btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/lego-sw-ucs-swcom-slide-desktop-lego_aca12bab.jpeg?region=0,0,2048,878"
                    className="w-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="lg:btn lg:btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="lg:btn lg:btn-circle">
                        ❯
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Slider
