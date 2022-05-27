import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { API } from '../../api/api';
import { ProductsContextProps } from './productsContext.model';
import { Product, ProductsResponse } from '../../models/product.model';

interface ProductsProviderProps {
  children: ReactNode | ReactNode[];
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const {
        data: { productos },
      } = await API.get<ProductsResponse>('/productos?limit=50');
      setProducts([...products, ...productos]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const loadProductById = async (): Promise<Product> => {
    return new Promise(() => {});
  };

  const addProduct = async (product: Product): Promise<void> => {
    return new Promise(() => {});
  };

  const updateProduct = async (product: Product): Promise<void> => {
    return new Promise(() => {});
  };

  const deleteProduct = async (product: Product): Promise<void> => {
    return new Promise(() => {});
  };

  // TODO: Change this any
  const uploadImage = async (data: any, product: Product): Promise<void> => {
    return new Promise(() => {});
  };

  const returnValue: ProductsContextProps = {
    loading,
    products,
    addProduct,
    uploadImage,
    loadProducts,
    updateProduct,
    deleteProduct,
    loadProductById,
  };

  return <ProductsContext.Provider value={returnValue}>{children}</ProductsContext.Provider>;
};
