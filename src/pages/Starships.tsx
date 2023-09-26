//? Components
import NavBar from '../components/NavBar'
import StarshipCards from '../components/StarshipCards'

const Starships = () => {
    return (
        <>
            <div className="starship-detail-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="content-ships">
                    <NavBar />
                    <div id="0" className="mt-4">
                        <StarshipCards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Starships
