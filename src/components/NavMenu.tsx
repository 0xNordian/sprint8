import { NavLink } from 'react-router-dom'

const NavMenu = () => {
    return (
        <div className="nav-menu mt-4 flex items-center justify-center border-[1px] border-slate-700">
            <div className="grid h-10 w-1/2 place-items-center border-x-[1px]  border-slate-700 sm:w-1/4">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="grid h-10 w-1/2 place-items-center border-x-[1px] border-slate-700 sm:w-1/4">
                <NavLink to="/starships">Starships</NavLink>
            </div>
        </div>
    )
}

export default NavMenu
