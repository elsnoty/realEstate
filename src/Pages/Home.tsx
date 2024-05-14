import Slider from "../Hero/slider";
import Nav from "../NavBar/Nav";
import FilterProp from "../Properties/Properties";
import Attract from "../attractClient/attract";
import Cities from "../sectionCities/Cities";
const Home = () => {
    return ( 
        <>
        <Nav />
        <Slider />
        <Attract />
        <FilterProp />
        <Cities />
        </>
     );
}
 
export default Home;