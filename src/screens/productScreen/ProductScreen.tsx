import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './ProductScreen.styles';
import { Button, HeaderTitle, TextInputForm } from '../../components';
import { RootProductsStackParamList } from '../../routes/routes';

interface ProductScreenProps extends StackScreenProps<RootProductsStackParamList, 'Product'> {}

const ProductScreen = ({
  route: {
    params: { product },
  },
}: ProductScreenProps) => {
  const [pageTitle, setPageTitle] = useState<string>(product.nombre ? product.nombre : 'New Product');
  const { top } = useSafeAreaInsets();

  const handleProductName = (text: string) => {
    setPageTitle(text);
  };

  const handleSaveProduct = () => {};

  const handleCamera = () => {};

  const handleGallery = () => {};

  return (
    <View style={{ ...styles.container, paddingTop: top + 20 }}>
      <HeaderTitle title={pageTitle.length > 0 ? pageTitle : 'Product name'} />
      <Text style={styles.label}>Product Name</Text>
      <TextInputForm
        value={pageTitle !== 'New Product' ? pageTitle : ''}
        autoCapitalize="words"
        keyboardType="default"
        placeholder="Product"
        placeholderTextColor="white"
        autoCorrect={false}
        onChangeText={text => handleProductName(text)}
      />
      <Text style={styles.label}>Category</Text>
      <Button text="Save" onPress={handleSaveProduct} />
      <View style={styles.optionsContainer}>
        <Button text="Camera" onPress={handleCamera} />
        <Button text="Gallery" onPress={handleGallery} />
      </View>
    </View>
  );
};

export { ProductScreen };
