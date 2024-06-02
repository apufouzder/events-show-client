import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {
    const { googleLogin, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";


    const handleGoogleLogin = () => {
        googleLogin();
        
    }

    useEffect(() => {
        if (user) navigate(from, { replace: true });
    }, [user, from, navigate]);
    
    return (
        <>
            <button onClick={handleGoogleLogin} className="btn btn-secondary">Google Login</button>
        </>
    );
};

export default GoogleLogin;