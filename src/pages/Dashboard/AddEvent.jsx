import axios from "axios";
import Swal from "sweetalert2";

const AddEvent = () => {

    const handleSubmit = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const fee = +form.fee.value;
        const type = form.type.value;
        const location = form.location.value;
        const date = form.date.value;
        const contact = form.contact.value;
        const speaker = form.speaker.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const data = {name, description, photo, fee, type, location, date, contact, speaker}

        const res = await axios.post('https://event-show-server.vercel.app/event',
            data,
            {
                headers: { authorization: `Bearer ${token}` }
            }
        )
        if (res.status === 200) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Event Added",
                showConfirmButton: false,
                timer: 1500
              });
            form.reset();
        }
    }

    return (
        <>
            <div className="shrink-0 w-1/2 shadow-2xl bg-base-100 my-8">
                <h2 className="text-2xl text-center ">Add New Event</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Event name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Event date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fee</span>
                        </label>
                        <input type="number" name="fee" placeholder="fee" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Event Type</span>
                        </label>
                        <input type="text" name="type" placeholder="Event type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Speaker</span>
                        </label>
                        <input type="text" name="speaker" placeholder="speaker" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact</span>
                        </label>
                        <input type="text" name="contact" placeholder="contact mail" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder="Bio" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="photo" placeholder="image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddEvent;