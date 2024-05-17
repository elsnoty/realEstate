import Footer from "../Footer/Footer";
import Slider from "../Hero/slider";
import Nav from "../NavBar/Nav";
import FilterProp from "../Properties/Properties";
import Attract from "../attractClient/attract";
import Contact from "../contact/contact";
import TeamExperts from "../expertTeam/expertTeam";
import Cities from "../sectionCities/Cities";
import Sponsers from "../sponsers/sponser";
import WorkSection from "../workSection/work";
const Home = () => {
    return ( 
        <>
        <Nav />
        <Slider />
        <Attract />
        <FilterProp />
        <Cities />
        <WorkSection />
        <Sponsers />
        <TeamExperts />
        <Contact />
        <Footer />
        </>
     );
}
 
export default Home;