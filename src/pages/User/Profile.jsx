import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const data = {name, email, image}
        console.log(data);
    }

    return (
        <>
            <div className="shrink-0 w-1/2 shadow-2xl bg-base-100 my-8">
                <h2 className="text-2xl text-center ">Update Profile</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user.displayName} placeholder="Event name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="image" defaultValue={user.photoURL} placeholder="image url" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;