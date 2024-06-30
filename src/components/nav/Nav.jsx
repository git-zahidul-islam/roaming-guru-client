import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Nav = () => {
    const { user, userLogOut } = useContext(AuthContext)
    const [theme,setTheme] = useState("light")

    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])

    const navLink = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#D83F31] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#D83F31] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/allTouristsSpot'}>All Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#D83F31] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/addTouristsSpot'}>Add Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#D83F31] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/myList'}>My List</NavLink></li>
    </>

    const handleLogout = () => {
        userLogOut()
            .then(result => {
                console.log("successfully logout", result);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleTheme = (e) =>{
        if(e.target.checked){
            setTheme("sunset")
        }
        else{
            setTheme("light")
        }
    }

    return (
        <div className="navbar bg-[#f4f5f6] p-5 sticky z-20 top-0 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="flex gap-3 flex-col dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 backdrop-blur-3xl">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-bold lg:w-8/12 md:w-8/12 w-52">
                    {/* <h1 className="text-xl font-bold">Roaming Guru</h1> */}
                    <div className="lg:w-[80px] md:w-[75px] w-16">
                    <img className="w-full h-full" src="/logo.png" alt="logo" />
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input 
                    onChange={handleTheme}
                    type="checkbox"
                     className="theme-controller" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className="relative group">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component"
                                            src={user && user.photoURL} />
                                    </div>
                                </div>
                                {
                                    user.displayName &&
                                    <div className="absolute invisible group-hover:visible bg-[#D83F31] p-2 z-50 w-36 -left-10 rounded-lg">
                                        <h1 className="text-white text-lg">{user && user.displayName}</h1>
                                    </div>
                                }
                            </div>
                            <button onClick={handleLogout} className="px-3 py-2 bg-[#D83F31] text-white text-base font-medium">Logout</button>
                        </div>
                        :
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="md:px-6 p-2 bg-[#DB5043] text-white md:text-lg rounded-lg md:font-bold">Join Now</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-white rounded-box space-y-2">
                                <li className="w-full bg-[#db5043e1] rounded-lg">
                                    <Link to={'/login'}><button className="px-2 py-1 text-white font-bold w-full">Login</button></Link>
                                </li>
                                <li className="w-full bg-[#db5043c6] rounded-lg">
                                    <Link to={'/registration'}><button className="px-2 py-1 text-white font-bold">Registration</button></Link>
                                </li>
                                
                            </ul>
                        </div>

                        // <div>

                        // </div>
                }
            </div>
        </div>
    );
};

export default Nav;