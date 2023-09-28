import NavBar from '../components/NavBar'
import ScrollCarousel from '../components/ScrollCarousel'
import ShimmerBorderCard from '../components/ShimmerBorderCard' // Update the import path
import Slider from '../components/Slider'

const Home = () => {
    const showLogger = true
    const showNavMenu = true

    return (
        <>
            <div className="starship-detail-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="flex flex-col content-ships">
                    <NavBar showLogger={showLogger} showNavMenu={showNavMenu} />
                    <div className="flex flex-col gap-8 pt-12">

                    <Slider />
                    <div className="video-container flex justify-center">
                        {/* <video
                            autoPlay
                            controls={false}
                            loop
                            muted
                            src="/public/SnapSave.io-Star Wars Intro HD 1080p.mp4"
                        ></video> */}
                    </div>
                    <section className="flex flex-wrap gap-8">
                        <ShimmerBorderCard
                            title="Starships"
                            msg="Discover all the starships of the fleets"
                            icon="ships"
                        />
                        <ShimmerBorderCard
                            title="Characters"
                            msg="Know all the characters of the saga"
                            icon="characters"
                        />
                        <ShimmerBorderCard
                            title="Planets"
                            msg="Explore all the planets of the galaxy"
                            icon="planets"
                        />
                    </section>
                    <ScrollCarousel />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
