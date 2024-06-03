import { Link, useLoaderData } from "react-router-dom";



const AllEvents = () => {
    const data = useLoaderData();
console.log(data);    return (
        <div className="container mx-auto py-14">
           
            <div className="flex flex-col gap-4">
                {data?.map(event => <>
                    <div key={event.name} className="rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center gap-14">
                        <div className="w-[500px]">
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
                        <p className="text-4xl font-bold text-purple-500">{event.fee}</p>
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default AllEvents;