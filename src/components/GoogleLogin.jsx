import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";


const GoogleLogin = () => {
    const { googleLogin, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";


    const handleGoogleLogin = () => {
        googleLogin()
            .then(async (result) => {
                if (result) {
                    const data = { displayName: result.user.displayName, email: result.user.email, photoUrl: result.user.photoURL };
                    const res = await axios.post('http://localhost:5000/user', data)
                    if (res.status === 200) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Create Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    useEffect(() => {
        if (user) navigate(from, { replace: true });
    }, [user, from, navigate]);

    return (
        <div className="mx-auto mb-8">
            <button onClick={handleGoogleLogin} className="btn capitalize border-gray-400 btn-outline hover:bg-transparent hover:text-inherit btn-ghost">
                <FcGoogle className='mr-1 text-2xl' />
                With Google
            </button>
        </div>
    );
};

export default GoogleLogin;