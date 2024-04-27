import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
// import logo from '../../../public/otherIMG/logo.png'

const Nav = () => {
    // const { userLogOut, user } = useContext(AuthContext)
    const navLink = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#00AFEF] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#00AFEF] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/allTouristsSpot'}>All Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#00AFEF] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/addTouristsSpot'}>Add Tourists Spot</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#00AFEF] text-xl font-semibold px-1 py-1 rounded-md" : "text-xl font-semibold px-1 py-1"} to={'/myList'}>My List</NavLink></li>
    </>

    const handleLogOut = () => {
        userLogOut()
            .then(result => {
                console.log("successfully logout", result);
            })
            .catch(error => {
                console.error(error);
            })
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
                    <h1 className="text-xl font-bold">Roaming Guru</h1>
                    
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    // user ?
                    //     <div className="flex items-center gap-2">
                    //         <div className="relative group">
                    //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    //                 <div className="w-10 rounded-full">
                    //                     <h1>nai</h1>
                    //                 </div>
                    //             </div>
                    //             {
                    //                 user.displayName &&
                    //                 <div className="absolute invisible group-hover:visible bg-[#49c3f0d0] p-2 z-50 w-36 -left-10 rounded-lg">
                    //                     <h1 className="text-white text-lg">{user && user.displayName}</h1>
                    //                 </div>
                    //             }
                    //         </div>
                    //         <button onClick={handleLogOut} className="px-3 py-2 bg-[#00afefbc] text-white text-base font-medium">Logout</button>
                    //     </div>
                    //     :
                        <Link to={'/login'}><button className="px-3 py-2 bg-[#00AFEF] text-white font-bold">Login</button></Link>
                        // ai link a login havai
                }

            </div>
        </div>
    );
};

export default Nav;