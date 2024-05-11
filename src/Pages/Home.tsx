import Slider from "../Hero/slider";
import Nav from "../NavBar/Nav";
import FilterProp from "../Properties/Properties";
import Attract from "../attractClient/attract";
import { ProductProvider } from "../data/ProductContext";
const Home = () => {
    return ( 
        <ProductProvider >
        <Nav />
        <Slider />
        <Attract />
        <FilterProp />
        </ProductProvider>
     );
}
 
export default Home;