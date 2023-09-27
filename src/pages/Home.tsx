import NavBar from '../components/NavBar'
import ScrollCarousel from '../components/ScrollCarousel'
import ShimmerBorderCard from '../components/ShimmerBorderCard'; // Update the import path

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
          <ScrollCarousel />
          <section className="flex flex-wrap gap-8">
          <ShimmerBorderCard title="Testa" msg="This is a test" icon="FiCloudLightning" />
            <ShimmerBorderCard title="Test" msg="This is a test" icon="FiCloudLightning" />
            <ShimmerBorderCard title="Another Title" msg="Another message" icon="FiCloudLightning" />
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
