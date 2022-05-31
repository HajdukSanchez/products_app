import { Product } from '../../models/product.model';

export type ProductsContextProps = {
  loading: boolean;
  products: Product[];
  loadProducts: () => Promise<void>;
  loadProductById: (id: string) => Promise<Product | null>;
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (product: Product) => Promise<void>;
  uploadImage: (data: any, product: Product) => Promise<void>; // TODO: Change this any
};
