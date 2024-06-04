import Banner from "../../components/Home/Banner";
import EventFeature from "../../components/Home/EventFeature";
import EventSection from "../../components/Home/EventSection";
import News from "../../components/Home/News";


const Home = () => {
    return (
        <>
            <Banner />
            <EventSection />
            <EventFeature />
            <News />
        </>
    );
};

export default Home;