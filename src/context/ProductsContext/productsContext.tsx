import React, { createContext, ReactNode, useState } from 'react';

import { Product } from '../../models/product.model';
import { ProductsContextProps } from './productsContext.model';

interface ProductsProviderProps {
  children: ReactNode | ReactNode[];
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async (): Promise<void> => {
    return new Promise(() => {});
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
