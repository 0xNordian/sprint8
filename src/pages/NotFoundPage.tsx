import { Link } from 'react-router-dom'
import Button from '../components/Button'

const NotFoundPage = () => {
    return (
        <div className="starship-detail-container">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <div className="content-ships z-[6]">
                <main className="flex flex-col justify-center items-center gap-6 xl:gap-12 h-[800px] lg:h-[900px] xl:h-[1000px] w-auto box-border">
                    <img
                        src="/yoda.png"
                        alt="Yoda"
                        className="w-1/2 md:w-1/3 xl:w-2/6"
                    />
                    <div className="flex flex-col gap-2 xl:gap-8">
                        <p className="text-3xl xl:text-[3rem]">To the dark side, a path you have taken.</p>
                        <p className="text-lg xl:text-[2rem]">Occurred, a 404 error has.</p>
                    </div>
                    <Link to="/" className="mt-4 text-[1rem] xl:text-[1.8rem]">
                        <Button msg="Go back to the force" />  
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default NotFoundPage;