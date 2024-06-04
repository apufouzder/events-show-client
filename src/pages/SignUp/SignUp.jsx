import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateNameAndPhoto } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";


    const handleCreateUser = (e) => {
        e.preventDefault();

        const form = e.target
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const data = { displayName: name, email, photoUrl: photo }

        createUser(email, password)
            .then(result => {
                // console.log("user: ", result.user);
                updateNameAndPhoto(result.user, name, photo)
                    .then(async () => {
                        const res = await axios.post('http://localhost:5000/user', data)
                        localStorage.setItem('token', res?.data?.token);
                        if (res.status === 200) { 
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Create Successfully!",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        navigate(from, { replace: true })
    }

    // if (user) navigate(from, { replace: true });

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL {"(optional)"}</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign Up</button>
                        </div>

                        <div className='mx-auto'>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;