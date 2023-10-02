import { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/useAuthStore'
import { Link } from 'react-router-dom'
import { useStarshipStore } from '../stores/useStarshipStore'

const cards = [
    {
        url: 'x-wing.png',
        title: 'X-Wing',
        href: '/starships/https%3A%2F%2Fswapi.dev%2Fapi%2Fstarships%2F12%2F',
        id: 1,
    },
    {
        url: 'millenium-falcon.png',
        title: 'Millenium Falcon',
        href: '/starships/https%3A%2F%2Fswapi.dev%2Fapi%2Fstarships%2F10%2F',
        id: 2,
    },
    {
        url: 'executor-dark.png',
        title: 'Executor',
        href: '/starships/https%3A%2F%2Fswapi.dev%2Fapi%2Fstarships%2F15%2F',
        id: 3,
    },
    {
        url: 'tie-fighter.webp',
        title: 'Tie Fighter',
        href: '/starships/https%3A%2F%2Fswapi.dev%2Fapi%2Fstarships%2F13%2F',
        id: 4,
    },
    {
        url: 'Death-Star.png',
        title: 'Death Star',
        href: '/starships/https%3A%2F%2Fswapi.dev%2Fapi%2Fstarships%2F9%2F',
        id: 5,
    },
    {
        url: 'sentinel-class.webp',
        title: 'Sentinel Class',
        href: '/starships/https%3A%2F%2Fswapi.dev%2Fapi%2Fstarships%2F5%2F',
        id: 6,
    },
    {
        url: 'Y-wing.webp',
        title: 'Y-Wing',
        href: '/starships/https%3A%2F%2Fswapi.dev%2Fapi%2Fstarships%2F11%2F',
        id: 7,
    },
]

const DaisyCarousel = () => {
    const authStore = useAuthStore()
    const [page] = useState(1)

    useEffect(() => {
        useStarshipStore.getState().fetchStarships(page.toString())
    }, [])

    return (
        <>
            {authStore.isLoggedIn ? (
                <div className="carousel-container flex flex-col gap-4 md:gap-12">
                    <div className="text-center text-xs md:text-left">
                        <hr />
                        <h3 className="mt-4 text-xl md:text-3xl">Disicover all the starships!</h3>
                    </div>
                    <div className="carousel rounded-box">
                        <div className="carousel-item flex gap-12 scroll-smooth pl-2 pr-14 md:px-20 md:gap-24 lg:gap-36">
                            {cards.map((card) => {
                                return (
                                    <div
                                        key={card.id}
                                        className="flex flex-col items-center justify-center my-8 md:my-10 gap-6 md:gap-12"
                                    >
                                        <Link key={card.id} to={card.href}>
                                            <img
                                                key={card.id}
                                                src={card.url}
                                                alt={card.title}
                                                title={card.title}
                                                className="rounded-box h-[150px] w-[150px] scroll-smooth transition-all duration-500 ease-in-out hover:scale-[1.1] md:h-[300px] md:w-[300px]"
                                            />
                                        </Link>
                                        <h3>{card.title}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <hr />
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default DaisyCarousel
