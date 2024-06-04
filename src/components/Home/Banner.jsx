

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <p className="text-lg font-semibold italic text-purple-400">Business Expo 2024</p>
                    <h1 className="mb-5 text-4xl md:text-5xl lg:text-7xl font-bold">Big Conference & Workshop</h1>
                    <p className="mb-5 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi Quaerat fugiat ut assumenda excepturi</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;