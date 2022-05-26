export interface ProductsResponse {
  total: number;
  productos: Product[];
}

export interface Product {
  _id: string;
  precio: number;
  nombre: string;
  categoria: CategoryProduct;
  usuario: UserProduct;
  img: string;
}

export interface CategoryProduct {
  _id: string;
  nombre: string;
}

export interface UserProduct {
  _id: string;
  nombre: string;
}
