import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <>
            <div className="starship-detail-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="content-ships">
                    <NavBar />
                    <h1>Home</h1>
                </div>
            </div>
        </>
    )
}

export default Home
