import { useAuthStore } from '../stores/useAuthStore'

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

    return (
        <>
            {authStore.isLoggedIn ? (
                <div className="carousel-container">
                    <div className="carousel rounded-box">
                        <div className="carousel-item flex gap-12">
                            {cards.map((card) => {
                                return (
                                    <img
                                        key={card.id}
                                        src={card.url}
                                        alt={card.title}
                                        className="rounded-box my-12 h-[150px] w-[150px] md:h-[300px] md:w-[300px]"
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default DaisyCarousel
