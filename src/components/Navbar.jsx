import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="p-4 flex justify-between md:px-40">
            <h2 className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-2xl font-bold text-transparent bg-clip-text">Irtaza <span className="hidden md:inline-block">Ahmad</span></h2>
            <ul className="flex gap-2 md:gap-10 font-semibold md:text-2xl">
                <li><NavLink to='/' className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : "text-black hover:text-pink-500" }>Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : "text-black hover:text-pink-500" }>About</NavLink></li>
                <li><NavLink to='/projects' className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : "text-black hover:text-pink-500" }>Projects</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : "text-black hover:text-pink-500" }>Contact</NavLink></li>
            </ul>
        </nav>
    );
}