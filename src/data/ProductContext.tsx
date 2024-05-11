import React, { createContext, useContext } from 'react';
import Products from './data';

interface Product {
  id: number;
  image: string;
  country: string;
  price: number;
  typeProp:string;
}

// Define context type
interface ProductContextType {
  products: Product[];
}

// Create context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Custom hook to use the product context
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

// Provider component
export const ProductProvider=  ({ children }: { children: React.ReactNode })=> {
    return (
      <ProductContext.Provider value={{ products: Products }}>
        {children}
      </ProductContext.Provider>
    );
  };