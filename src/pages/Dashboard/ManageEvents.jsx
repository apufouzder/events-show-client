

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    console.log(events);

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch(`https://event-show-server.vercel.app/event/${id}`, {
                        method: 'DELETE',
                        headers: { authorization: `Bearer ${token}` }
                    })
                        .then(res => res.json())
                        .then(() => {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            setEvents(events.filter(item => item?._id !== id));
                        })

                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deleting your file.",
                        icon: "error"
                    });
                }
            }
        });
    }
    useEffect(() => {
        fetch('https://event-show-server.vercel.app/event')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

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
                        {events.length > 0 ? events.map(event => <>
                            <tr key={event._id}>
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
                                <td>${event.fee}</td>
                                <th className="flex gap-1">
                                    <Link to={`/event/${event._id}`}><button className="btn btn-accent btn-xs">details</button></Link>
                                    <Link to={`/dashboard/edit/${event._id}`}><button className="btn btn-info btn-xs">edit</button></Link>
                                    <button onClick={() => handleDelete(event._id)} className="btn btn-warning btn-xs">Delete</button>
                                </th>
                            </tr>
                        </>) : <span className="loading w-16 loading-spinner text-secondary"></span>}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageEvents;