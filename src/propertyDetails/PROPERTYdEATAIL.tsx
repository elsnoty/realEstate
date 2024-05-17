import { useParams } from "react-router-dom";
import { useProductContext } from "../data/ProductContext";
import ModernForm from "./form";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const PropDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useProductContext();

    const productId = id ? parseInt(id) : undefined;

    const product = productId && products.find(product => product.id === productId);

    if (!product) { 
        return <div>No product found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="px-20 py-3 max-md:px-5 max-md:py-0">
                <NavBar />
            </div>
            <div className="flex-grow px-16 relative py-7 flex gap-5 justify-evenly max-md:px-8 max-md:flex-wrap">
                <div className="shadow-2xl p-5 rounded-xl w-[600px]">
                    <img src={product.image} alt="" className="rounded-lg"/>
                    <div className="flex gap-3 mt-5 font-semibold text-center">
                        <p className="min-w-[100px] rounded-full bg-purple-600">{product.country}</p>
                        <p className="min-w-[100px] rounded-full bg-green-700">{product.typeProp}</p>
                    </div>
                    <div className='flex gap-5 py-3'>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faBed} className="text-green-700"/>
                            <p>5 Bed</p>
                        </div>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faBath}  className="text-green-700"/>
                            <p>4 Bath</p>
                        </div>
                    </div>
                    <p className="text-purple-600 font-bold">${product.price}</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ut, dolorem excepturi facere officiis cum nesciunt repellendus sint nobis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ut, dolorem excepturi facere officiis cum nesciunt repellendus sint nobis.
                    </p>
                </div>
                <ModernForm />
            </div>
            <Footer />
        </div>
    );
}
 
export default PropDetails;
