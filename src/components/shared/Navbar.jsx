import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost flex gap-0 text-2xl">Event<span className="text-pink-700 text-base">show</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                         <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Register</Link></li>
                        </>
                        <>
                            {/* <li><button className="btn btn-secondary">Log Out</button></li> */}
                            {/* <li>
                                <div className="avatar">
                                    <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </li> */}
                        </>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;