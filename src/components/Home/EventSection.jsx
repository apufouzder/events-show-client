import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EventSection = () => {
    const [events, setEvents] = useState([]);

    async function getData() {
        const res = await axios.get('http://localhost:5000/event')
        setEvents(res.data);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="container mx-auto py-14">
            <div className="mb-14 text-center">
                <p className="text-base font-semibold text-purple-600 font-mono mb-3">__Events__</p>
                <h1 className="text-5xl font-semibold">Here All Events</h1>
            </div>
            <div className="flex flex-col gap-4">
                {events.slice(0, 4).map(event => <>
                    <div key={event._id} className="rounded-lg mx-4 lg:mx-0 shadow-lg p-4 flex flex-col sm:flex-row items-center gap-14">
                        <div className="sm:w-[500px]">
                            <Link to={`/event/${event._id}`}><img className="w-full" src={event.photo} alt="Photo" /></Link>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl text-purple-500 font-semibold font-mono">{event.date}</p>
                            <Link to={`/event/${event._id}`}>
                                <h1 className="text-4xl font-semibold my-4 hover:text-purple-950">{event.name}</h1>
                            </Link>
                            <p className="text-gray-500 text-xl font-medium mb-2">{event.contact}</p>
                            <p className="text-gray-500 text-xl font-medium">{event.location}</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-purple-500">${event.fee}</p>
                        </div>
                    </div>
                </>
                )}
            </div>
            <div className="text-center mt-8">
                <Link to={"/events"}><button className="btn btn-secondary text-lg">See More</button></Link>
            </div>
        </div>
    );
};

export default EventSection;