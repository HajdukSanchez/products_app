import { Product, ProductInsertDTO, ProductUpdateDTO } from '../../models/product.model';

export type ProductsContextProps = {
  loading: boolean;
  products: Product[];
  loadProducts: () => Promise<void>;
  loadProductById: (id: string) => Promise<Product | null>;
  addProduct: (product: ProductInsertDTO) => Promise<Product | null>;
  updateProduct: (id: string, product: ProductUpdateDTO) => Promise<void>;
  deleteProduct: (product: Product) => Promise<void>;
  uploadImage: (data: any, product: Product) => Promise<void>; // TODO: Change this any
};
