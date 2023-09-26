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
                    <div className="video-container flex justify-center">
                        {/* <img
                            className="h-2/6"
                            src="/public/starwars-intro.gif"
                            alt="StarWars Intro"
                        /> */}
                        <video
                            autoPlay
                            controls={false}
                            loop
                            muted
                            src="/public/SnapSave.io-Star Wars Intro HD 1080p.mp4"
                        ></video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
