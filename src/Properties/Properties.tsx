import { useState } from 'react';
import { useProductContext } from '../data/ProductContext';
import FilterProduct, { Filter } from './filterProperty';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filters: Filter) => {
    let filtered = [...products];

    if (filters.location && filters.location !== "Location (Any)") {
      filtered = filtered.filter(product => product.country === filters.location);
    }

    if (filters.propertyType && filters.propertyType !== "Property Type (Any)") {
      filtered = filtered.filter(product => product.typeProp === filters.propertyType);
    }

    if (filters.priceRange && filters.priceRange !== "Price Range (Any)") {
      filtered = filtered.filter(product => {
        const priceRange = filters.priceRange;
        if (priceRange) {
          const [min, max] = priceRange.split('-').map(value => parseInt(value));
          return product.price >= min && product.price <= max;
        }
        return true; // If priceRange is null, don't filter based on price
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <FilterProduct onFilter={handleFilter} />
      (
        <div className='grid grid-cols-3 gap-5 px-10 max-md:px-5 my-10 cursor-pointer max-xl:grid-cols-2 max-sm:grid-cols-1'>
          {filteredProducts.length === 0 ? (
            <div className='font-bold text-4xl'>No properties found.</div>
          ) : (
            filteredProducts.map((product) => (
              <Link to={`/DetailsProperty/${product.id}`} key={product.id} className='bg-gray-200 rounded-xl p-2 hover:scale-95   transition-all duration-500'>
                <img src={product.image} className='rounded-xl'/>
                <p>Country: {product.country}</p>
                <p>Price: ${product.price}</p>
              </Link>
            ))
          )}
        </div>
      )
    </div>
  );
};

export default ProductList;
