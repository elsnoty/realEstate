import { useState } from 'react';
import { useProductContext } from '../data/ProductContext';
import FilterProduct, { Filter } from './filterProperty';
import { Link } from 'react-router-dom';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons/faBath';

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
              <Link to={`/DetailsProperty/${product.id}`} key={product.id} className='shadow-2xl p-5 rounded-xl hover:scale-95   transition-all duration-500'>
                <img src={product.image} className='rounded-xl'/>
                <p className='py-2'>Location: {product.country}</p>
                <p className=''>Price: ${product.price}</p>
                <div className='flex gap-5 pt-2'>
                  <div className='flex gap-2'>
                    <FontAwesomeIcon icon={faBed}/>
                    <p>5 Bed</p>
                  </div>
                  <div className='flex gap-2'>
                  <FontAwesomeIcon icon={faBath} />
                    <p>4 Bath</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )
    </div>
  );
};

export default ProductList;
