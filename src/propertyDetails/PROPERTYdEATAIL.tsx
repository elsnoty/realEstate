import { useParams } from "react-router-dom";
import { useProductContext } from "../data/ProductContext";
import ModernForm from "./form";

const PropDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useProductContext();

    const productId = id ? parseInt(id) : undefined;

    const product = productId && products.find(product => product.id === productId);

    if (!product) { 
        return <div>No product found</div>;
    }
    return (
        <div>
            <div className="flex justify-evenly">
            <p>{product.country}</p>
            <p>{product.typeProp}</p>
            <p>${product.price}</p>
            </div>
            <img src={product.image} alt="" />
        <ModernForm/>
        </div>
    );
}
 
export default PropDetails;
