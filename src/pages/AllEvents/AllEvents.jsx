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

const AllEvents = () => {
    return (
        <div className="container mx-auto py-14">
           
            <div className="flex flex-col gap-4">
                {events.map(event => <>
                    <div key={event.name} className="rounded-lg shadow-lg p-4 flex items-center gap-14">
                        <div className="w-[500px]">
                            <img className="w-full" src={event.photo} alt="Photo" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl text-purple-500 font-semibold font-mono">{event.date}</p>
                            <h1 className="text-4xl font-semibold my-4">{event.name}</h1>
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