import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootProductsStackParamList } from '../../routes/routes';

interface ProductScreenProps extends StackScreenProps<RootProductsStackParamList, 'Product'> {}

const ProductScreen = ({
  route: {
    params: { product },
  },
  navigation: { setOptions },
}: ProductScreenProps) => {
  const [pageTitle, setPageTitle] = useState<string>(product.nombre ? product.nombre : 'New Product');

  useEffect(() => {
    setOptions({ headerTitle: pageTitle });
  }, []);

  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  );
};

export { ProductScreen };
