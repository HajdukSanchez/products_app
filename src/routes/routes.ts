import { Product } from '../models/product.model';

export type RootAuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ProductsStack: undefined;
};

export type RootProductsStackParamList = {
  Protected: undefined;
  Products: undefined;
  Product: { product: Product };
};
