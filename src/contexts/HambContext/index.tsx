import { createContext, useEffect, useState } from "react";
import { api } from "../../api/request";

interface iHProviderProps {
  children: React.ReactNode;
}

interface iProductsValues {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iHambResponses {
    GetProducts: any,
    products: iProductsValues[]
}

export const HambContext = createContext({} as iHambResponses);

export function HambProvider({ children }: iHProviderProps) {
  const [products, setProducts] = useState([] as iProductsValues[]);

  async function GetProducts() {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.get<iProductsValues[]>("products", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setProducts(response.data)
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() => {
    GetProducts()
  }, [])

  return (
    <HambContext.Provider value={{ GetProducts, products }}>
        {children}
    </HambContext.Provider>
  )
}
