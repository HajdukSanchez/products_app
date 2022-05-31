import { useEffect, useState } from 'react';

import { API } from '../../api/api';
import { CategoriesResponse, Category } from '../../models/categories.model';

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      setIsLoading(true);
      const {
        data: { categorias },
      } = await API.get<CategoriesResponse>('/categorias');
      setCategories(categorias);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { categories, isLoading, category, setCategory };
};

export { useCategory };
