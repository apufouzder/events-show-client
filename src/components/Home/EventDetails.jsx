import { useLoaderData } from "react-router-dom";


const EventDetails = () => {
    const data = useLoaderData();
    
    return (
        <>
            <div className="container mx-4 md:mx-auto py-20">
                <img className="w-full object-cover" src={data?.photo} alt="Photo" />
                <div className="flex gap-4 mt-6">
                    <h3 className="text-xl font-semibold text-purple-800">Date: { data?.date}</h3>
                    <h3 className="text-xl font-semibold">Location: { data?.location}</h3>
                </div>
                <h1 className="text-5xl my-4 font-bold">{data?.name}</h1>
                <p className="text-xl leading-8 text-gray-700">{ data?.description}</p>
                <p className="text-xl font-semibold mt-8">Contact: { data?.contact}</p>
                <p className="text-xl font-semibold mt-8">Speaker: { data?.speaker}</p>
                <p className="text-xl font-semibold mt-8">Fee: ${ data?.fee}</p>
            </div>
        </>
    );
};

export default EventDetails;