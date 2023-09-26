import { NavLink } from "react-router-dom"

const NavMenu = () => {
    return (
        <div className="flex justify-center items-center mt-4 border-[1px] border-slate-600">
            <div className="grid place-items-center border-[1px] border-slate-600 h-10 w-1/6"><NavLink to="/">Home</NavLink ></div>
            <div className="grid place-items-center border-[1px] border-slate-600 h-10 w-1/6"><NavLink to="starships">Starships</NavLink></div>
        </div>
    )
}

export default NavMenu