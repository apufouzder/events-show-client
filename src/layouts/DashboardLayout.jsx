import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
                    <div>
                        <Link to={"/"}><button className="btn btn-secondary mb-5">Home</button></Link>
                        <li>
                            <Link to={"/dashboard/manage"}>Manage Events</Link>
                        </li>
                        <li>
                            <Link to={"/dashboard/addEvent"}>Add Event</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;