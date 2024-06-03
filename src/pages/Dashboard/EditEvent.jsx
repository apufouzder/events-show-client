

const EditEvent = () => {
    const handleSubmit = async (e) => {
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
        const image = form.image.value;
        const pData = {name, description, image, fee, type, location, date, contact, speaker}

        console.log(pData);
    }
    return (
        <>
            <div className="shrink-0 w-1/2 shadow-2xl bg-base-100 my-8">
                <h2 className="text-2xl text-center ">Update Event</h2>
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
                        <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditEvent;