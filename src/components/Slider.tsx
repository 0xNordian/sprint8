import ButtonForm from './ButtonForm'

const Slider = () => {
    return (
        <div className="carousel w-full border border-green-400">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-10 h-[80%] w-[90%] border border-yellow-400">
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/107-ahsoka-logotitle-800_1ee3f65b.png?region=0,0,800,445"
                            alt="Ahsoka Logo"
                            id="ahsoka-logo"
                            className="absolute left-16 top-12 z-10 w-2/6"
                        />
                        <p className="absolute bottom-24 left-16 z-10 w-2/6">
                            Hera must answer to the New Republic, while far, far
                            away, a reunion takes place.
                        </p>
                        <div className="absolute bottom-10 left-16 z-10 w-2/6">
                            <ButtonForm msg="Stream now" />
                        </div>
                    </div>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-episode-107-hero-desktop_470f5f96.jpeg?region=0,0,1600,686"
                        alt="Ahsoka Banner"
                        id="ahsoka-banner-1"
                        className="z-1 relative w-full"
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-10 h-[80%] w-[90%] border border-yellow-400">
                        <div className="flex h-full w-7/12 flex-col px-20 pr-28 gap-6 justify-center">
                            <h2 className="text-left">
                                Ahsoka Tano Arrives in Fortnite
                            </h2>
                            <h3 className="text-left">
                                The legendary Jedi is now unlockable in
                                Fortnite's latest Battle Pass.
                            </h3>
                            <div className="">
                                <ButtonForm msg="Stream now" />
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-hero-sashsingle-hero-desktop_9e40f89d.jpeg?region=0,0,2048,878"
                        alt="Ahsoka Banner"
                        id="ahsoka-banner-2"
                        className="z-1 relative w-full"
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-10 h-[80%] w-[90%] border border-yellow-400">
                        <div className="flex h-full w-7/12 flex-col px-20 pr-36 gap-6 justify-center">
                            <h2 className="content-title text-left">
                            How the ILM Model Shop Brought Ahsoka’s T-6 Jedi Shuttle to Life
                            </h2>
                            <h3 className="text-left">
                                The legendary Jedi is now unlockable in
                                Fortnite's latest Battle Pass.
                            </h3>
                            <div className="">
                                <ButtonForm msg="Stream now" />
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-t6-shuttle-goodson-hero-desktop_6b679008.jpeg?region=0,0,2048,878"
                        alt="Ahsoka Banner"
                        id="ahsoka-banner-2"
                        className="z-1 relative w-full"
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
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
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Slider
