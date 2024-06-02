import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signInUser, user} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";


    const handleSignInUser = (e) => {
        e.preventDefault();

        const from = e.target
        const email = from.email.value;
        const password = from.password.value;
        signInUser(email, password);
    }

    if (user) navigate(from, { replace: true });

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignInUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className='mx-auto'>
                        <label className="label">
                                <Link to="/signup" className="label-text-alt link link-hover">{"Don't have an account?"}</Link>
                            </label>
                        </div>

                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;