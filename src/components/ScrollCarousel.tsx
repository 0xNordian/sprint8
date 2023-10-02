import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { CardTypes } from '../CardTypes'

const Example = () => {
    return (
        <div className="">
            <HorizontalScrollCarousel />
        </div>
    )
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

    return (
        <section ref={targetRef} className="relative h-[320vh] lg:h-[200vh]">
            <div className="sticky top-0 flex h-[50vh] lg:h-[40vh] items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />
                    })}
                </motion.div>
            </div>
        </section>
    )
}

const Card = ({ card }: { card: CardTypes }) => {
    return (
        <div
            key={card.id}
            className="group relative h-32 w-32 overflow-hidden md:h-64 md:w-64 lg:h-[450px] lg:w-[450px]"
        >
            {/* <Link to={card.href} className="absolute inset-0 z-20"> */}
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    // backgroundSize: '350px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="absolute inset-0 z-0 bg-[length:120px_120px] transition-transform duration-300 group-hover:scale-110 md:bg-[length:200px_200px] lg:bg-[length:300px_300px]"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="text-md bg-gradient-to-br from-white/20 to-white/0 p-3 font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default Example

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
