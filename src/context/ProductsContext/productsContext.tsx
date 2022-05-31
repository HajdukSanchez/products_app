import React, { createContext, ReactNode, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { API } from '../../api/api';
import { ProductsContextProps } from './productsContext.model';
import { AuthStorageData } from '../authContext/authContext.model';
import { Product, ProductInsertDTO, ProductsResponse, ProductUpdateDTO } from '../../models/product.model';

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

  const loadProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      const {
        data: { productos },
      } = await API.get<ProductsResponse>('/productos?limit=50');
      setProducts([...products, ...productos]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadProductById = async (id: string): Promise<Product | null> => {
    let product: Product | null;
    try {
      setLoading(true);
      const { data } = await API.get<Product>(`/productos/${id}`);
      product = data || null;
    } catch (error) {
      console.error(error);
      product = null;
    } finally {
      setLoading(false);
    }
    return product;
  };

  const addProduct = async (product: ProductInsertDTO): Promise<Product | null> => {
    let newProduct: Product | null;
    try {
      setLoading(true);
      const tokenStored = await AsyncStorage.getItem(AuthStorageData.TOKEN);
      console.log({ tokenStored, product });
      const { data } = await API.post<Product>(
        '/productos',
        { nombre: product.nombre, categoria: product.categoria },
        { headers: { 'x-token': tokenStored! } },
      );
      setProducts([...products, data]);
      newProduct = data || null;
    } catch (error) {
      console.error(error);
      newProduct = null;
    } finally {
      setLoading(false);
    }
    return newProduct;
  };

  const updateProduct = async (id: string, product: ProductUpdateDTO): Promise<void> => {
    try {
      setLoading(true);
      const tokenStored = await AsyncStorage.getItem(AuthStorageData.TOKEN);
      const { data } = await API.put<Product>(`/productos/${id}`, { nombre: product.nombre }, { headers: { 'x-token': tokenStored! } });
      setProducts(products.map((productItem: Product) => (productItem._id === id ? data : productItem))); // Filter the product and replace it
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
