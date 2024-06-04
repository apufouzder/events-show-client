import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ActiveLink from "../ActiveLink";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const signOut = () => {
        logOut();
    }


    return (
        <>
            <div className="bg-base-200">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <>
                                    <li><ActiveLink to="/">Home</ActiveLink></li>
                                    <li><ActiveLink to="/about">About</ActiveLink></li>
                                    <li><ActiveLink to="/events">Events</ActiveLink></li>
                                    <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>

                                </>
                            </ul>
                        </div>

                        <Link to="/">
                            <div className="flex-1">
                                <a className="btn btn-ghost flex gap-0 text-2xl">Event<span className="text-pink-700 text-base">show</span></a>
                            </div>
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-lg menu-horizontal gap-6 px-1">
                            <>
                                <li><ActiveLink to="/">Home</ActiveLink></li>
                                <li><ActiveLink to="/about">About</ActiveLink></li>
                                <li><ActiveLink to="/events">Events</ActiveLink></li>
                                <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>

                            </>
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {
                            user ?
                                <>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom capitalize" data-tip={`${user?.displayName === null ? "Name not available" : user?.displayName}`}>
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt="profile" />
                                        </div>
                                    </label>

                                    <button onClick={signOut} className="btn btn-xs capitalize bg-purple-600 text-white border-0 hover:bg-purple-400">Log Out</button>
                                </>
                                :
                                <div className="flex gap-2">
                                    <Link to="/login">
                                        <button className="btn btn-md capitalize bg-purple-700 text-white border-0 hover:bg-purple-900">Login</button>
                                    </Link>
                                    <Link to="/signup">
                                        <button className="btn capitalize bg-purple-700 text-white border-0 hover:bg-purple-900">Sign Up</button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;