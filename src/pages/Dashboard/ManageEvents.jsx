
import { Link } from "react-router-dom";
const events = [
    {
        name: "Global Health Summit 2024",
        date: "2024-07-20",
        location: "New York City, NY",
        description: "A summit focused on the latest advancements in global health and medicine, featuring prominent health professionals and researchers.",
        speaker: "Dr. Lisa Wong",
        contact: "info@roboticsforum.com",
        fee: "$500",
        photo: "https://eventics.temptics.com/assets/img/event-details-img.jpg"
    },
    {
        name: "Sustainable Energy Conference 2024",
        date: "2024-08-10",
        location: "Berlin, Germany",
        description: "A conference dedicated to discussing sustainable energy solutions and innovations, featuring industry leaders and experts.",
        speaker: "Dr. Lisa Wong",
        contact: "info@roboticsforum.com",
        fee: "€350",
        photo: "https://eventics.temptics.com/assets/img/event-details-img.jpg"
    },
    {
        name: "AI and Machine Learning Expo 2024",
        date: "2024-09-05",
        location: "San Francisco, CA",
        description: "An expo showcasing the latest trends and technologies in AI and machine learning, with presentations from leading tech companies.",
        speaker: "Dr. Lisa Wong",
        contact: "info@roboticsforum.com",
        fee: "$250",
        photo: "https://eventics.temptics.com/assets/img/event-details-img.jpg"
    },
    {
        name: "International Robotics Forum 2024",
        date: "2024-10-15",
        location: "Tokyo, Japan",
        description: "A forum bringing together robotics experts to discuss advancements in robotics technology and its applications.",
        speaker: "Ms. Rachel Green",
        contact: "info@roboticsforum.com",
        fee: "¥30,000",
        photo: "https://eventics.temptics.com/assets/img/event-details-img.jpg"
    },
    {
        name: "Blockchain Technology Summit 2024",
        date: "2024-11-01",
        location: "Dubai, UAE",
        description: "A summit focused on the latest developments in blockchain technology and its impact on various industries.",
        speaker: "Ms. Rachel Green",
        contact: "info@roboticsforum.com",
        fee: "$400",
        photo: "https://eventics.temptics.com/assets/img/event-details-img.jpg"
    },
    {
        name: "Cybersecurity Conference 2024",
        date: "2024-06-25",
        location: "London, UK",
        description: "A conference addressing the latest challenges and solutions in cybersecurity, with keynotes from industry experts.",
        speaker: "Ms. Rachel Green",
        contact: "info@cybersecurityconf.com",
        fee: "£300",
        photo: "https://eventics.temptics.com/assets/img/event-details-img.jpg"
    },
    {
        name: "Digital Marketing World Forum 2024",
        date: "2024-08-20",
        location: "Sydney, Australia",
        description: "A forum exploring the latest trends and strategies in digital marketing, with insights from top marketers.",
        speaker: "Ms. Rachel Green",
        contact: "contact@digitalmarketingforum.com",
        fee: "AUD 450",
        photo: "https://eventics.temptics.com/assets/img/event-details-img.jpg"
    },
]

const ManageEvents = () => {
//     const [events, setEvents] = useState([])
// console.log(events);
//     useEffect(() => {
//         fetch('data.json')
//             .then(res => res.json())
//             .then(data => setEvents(data))
//     }, [])
    return (
        <>
            <div className="overflow-x-auto w-full shadow-lg border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="font-semibold text-lg">Name</th>
                            <th className="font-semibold text-lg">Speaker</th>
                            <th className="font-semibold text-lg">Location</th>
                            <th className="font-semibold text-lg">Date</th>
                            <th className="font-semibold text-lg">Contact</th>
                            <th className="font-semibold text-lg">Fee</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => <>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={event.photo} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{event.name}</div>
                                </td>
                                <td>{event.speaker}</td>
                                <td>{event.location}</td>
                                <td>{event.date}</td>
                                <td>{event.contact}</td>
                                <td>{event.fee}</td>
                                <th className="flex gap-1">
                                    <Link to={`/event/${event.id}`}><button className="btn btn-accent btn-xs">details</button></Link>
                                    <Link to={`/dashboard/edit/${event.id}`}><button className="btn btn-info btn-xs">edit</button></Link>
                                    <button className="btn btn-warning btn-xs">Delete</button>
                                </th>
                            </tr>
                        </>)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageEvents;