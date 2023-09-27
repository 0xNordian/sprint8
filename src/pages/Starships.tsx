//? Components
import NavBar from '../components/NavBar'
import StarshipCards from '../components/StarshipCards'

const Starships = () => {
    const showLogger = true
    const showNavMenu = true

    return (
        <>
            <div className="starship-detail-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="content-ships">
                    <NavBar showLogger={showLogger} showNavMenu={showNavMenu} />
                    <div id="0" className="mt-4">
                        <StarshipCards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Starships
