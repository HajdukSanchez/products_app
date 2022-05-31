import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './ProductScreen.styles';
import { useForm, useCategory } from '../../hooks';
import { Category } from '../../models/categories.model';
import { RootProductsStackParamList } from '../../routes/routes';
import { ProductsContext } from '../../context/productsContext/ProductsContext';
import { Button, HeaderTitle, LoadingModal, TextInputForm } from '../../components';

interface ProductScreenProps extends StackScreenProps<RootProductsStackParamList, 'Product'> {}

const ProductScreen = ({
  route: {
    params: { product },
  },
}: ProductScreenProps) => {
  const { top } = useSafeAreaInsets();
  const { categories, isLoading: loadingCategories } = useCategory();
  const { loading, loadProductById, addProduct, updateProduct } = useContext(ProductsContext);
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
      categoryId: productData?.categoria?._id || '',
    });
  };

  const handleSaveOrUpdateProduct = async () => {
    if (!!_id) {
      updateProduct(_id, { nombre: nombre.trim() });
    } else {
      const newProduct = await addProduct({ nombre: nombre.trim(), categoria: categoryId });
      if (newProduct) onChange(newProduct._id, '_id');
    }
  };

  const handleCamera = () => {};

  const handleGallery = () => {};

  return (
    <ScrollView style={{ ...styles.container, paddingTop: top + 20 }}>
      <LoadingModal isVisible={loading || loadingCategories} />
      <HeaderTitle title={nombre || 'Product name'} />
      <Text style={styles.label}>Name</Text>
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
      {!!_id && (
        <>
          <Text style={styles.label}>Image</Text>
          <Image source={img ? { uri: img } : require('../../assets/images/image-not-found.png')} style={styles.image} />
        </>
      )}
      {!!_id && (
        <View style={styles.optionsContainer}>
          <Button text="Camera" onPress={handleCamera} withBorder={false} />
          <Button text="Gallery" onPress={handleGallery} withBorder={false} />
        </View>
      )}
      <Button text={_id ? 'Update' : 'Save'} onPress={handleSaveOrUpdateProduct} />
    </ScrollView>
  );
};

export { ProductScreen };
