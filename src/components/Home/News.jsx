

const News = () => {
    return (
        <div className="hero my-16" style={{ backgroundImage: `url("https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content  py-16 text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Our Best Events Here!</h1>
                    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas est molestiae incidunt dolores odit cupiditate, repellat quibusdam minima impedit!</p>
                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default News;