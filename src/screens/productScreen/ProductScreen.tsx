import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './ProductScreen.styles';
import { useForm, useCategory } from '../../hooks';
import { Category } from '../../models/categories.model';
import { RootProductsStackParamList } from '../../routes/routes';
import { Button, HeaderTitle, TextInputForm } from '../../components';
import { ProductsContext } from '../../context/productsContext/ProductsContext';

interface ProductScreenProps extends StackScreenProps<RootProductsStackParamList, 'Product'> {}

const ProductScreen = ({
  route: {
    params: { product },
  },
}: ProductScreenProps) => {
  const { top } = useSafeAreaInsets();
  const { categories } = useCategory();
  const { loadProductById } = useContext(ProductsContext);
  const { _id, categoryId, nombre, img, onChange, setFormValue } = useForm({
    img: '',
    categoryId: '',
    _id: product._id || '',
    nombre: product.nombre || 'New Product',
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (!_id) return;
    const productData = await loadProductById(_id);
    setFormValue({
      _id: product._id || '',
      img: productData?.img || '',
      nombre: productData?.nombre || '',
      categoryId: productData?.categoria._id || '',
    });
  };

  const handleSaveProduct = () => {};

  const handleCamera = () => {};

  const handleGallery = () => {};

  return (
    <ScrollView style={{ ...styles.container, paddingTop: top + 20 }}>
      <HeaderTitle title={nombre || 'Product name'} />
      <Text style={styles.label}>Product Name</Text>
      <TextInputForm
        value={nombre !== 'New Product' ? nombre : ''}
        autoCapitalize="words"
        keyboardType="default"
        placeholder="Product"
        placeholderTextColor="white"
        autoCorrect={false}
        onChangeText={text => onChange(text, 'nombre')}
      />
      <Text style={styles.label}>Category</Text>
      <Picker selectedValue={categoryId} onValueChange={itemValue => onChange(itemValue, 'categoryId')}>
        {categories.map((category: Category) => (
          <Picker.Item label={category.nombre} value={category._id} key={category._id} />
        ))}
      </Picker>
      <Button text="Save" onPress={handleSaveProduct} />
      <View style={styles.optionsContainer}>
        <Button text="Camera" onPress={handleCamera} />
        <Button text="Gallery" onPress={handleGallery} />
      </View>
    </ScrollView>
  );
};

export { ProductScreen };
