import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <p className="card-title">404 Page Not Found</p>
                <div className="card-actions">
                    <Link className="btn btn-primary" to="/">Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;