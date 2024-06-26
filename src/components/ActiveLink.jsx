/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "font-medium text-purple-700" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;