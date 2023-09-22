import { createContext, useState } from "react";

//Crear contexto
export const Product = createContext();

//crear el provider

export function ProductProvider({ children }) {

  const [products, setProducts] = useState(0);
  const [imageTarget, setImageTarget] = useState(1);

  return (
    <Product.Provider value={{
      products,
      setProducts,
      imageTarget,
      setImageTarget
    }}>
      {children}
    </Product.Provider>
  )
}