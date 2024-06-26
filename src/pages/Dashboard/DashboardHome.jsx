import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="border shadow-md p-10 text-center rounded-lg">
                <div className="avatar mb-6">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                    </div>
                </div>
                <h2 className="text-3xl font-semibold">{user?.displayName ? user?.displayName : "User Name"}</h2>
                <p className="text-gray-700 mt-5 text-lg badge badge-ghost">{user?.email}</p>
            </div>

        </>
    );
};

export default DashboardHome;