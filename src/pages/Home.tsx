import AhsokaVideos from '../components/AhsokaVideos'
import DaisyCarousel from '../components/DaisyCarousel'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
// import ScrollCarousel from '../components/ScrollCarousel'
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
                <div className="content-ships flex flex-col z-[6]">
                    <NavBar showLogger={showLogger} showNavMenu={showNavMenu} />
                    <div className="flex flex-col gap-8 pt-6">
                        <Slider />
                    <div className="">
                        <AhsokaVideos />
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
                        {/* <ScrollCarousel /> */}
                        <DaisyCarousel />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
