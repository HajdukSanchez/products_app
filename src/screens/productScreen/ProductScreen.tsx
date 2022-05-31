import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { styles } from './ProductScreen.styles';
import { useForm, useCategory } from '../../hooks';
import { Category } from '../../models/categories.model';
import { RootProductsStackParamList } from '../../routes/routes';
import { Button, HeaderTitle, TextInputForm } from '../../components';
import { ProductsContext } from '../../context/productsContext/productsContext';

interface ProductScreenProps extends StackScreenProps<RootProductsStackParamList, 'Product'> {}

const ProductScreen = ({
  route: {
    params: { product },
  },
}: ProductScreenProps) => {
  const [temporalImageURL, setTemporalImageURL] = useState<string>();
  const { top } = useSafeAreaInsets();
  const { categories } = useCategory();
  const { loadProductById, addProduct, updateProduct, uploadImage } = useContext(ProductsContext);
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

  const handleCamera = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 0.5 }, response => {
      if (response.didCancel) return;
      if (response.assets) setTemporalImageURL(response.assets[0].uri);
      uploadImage(response, product);
    });
  };

  const handleGallery = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.5 }, response => {
      if (response.didCancel) return;
      if (response.assets) setTemporalImageURL(response.assets[0].uri);
      uploadImage(response, product);
    });
  };

  return (
    <ScrollView style={{ ...styles.container, paddingTop: top + 20 }}>
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
      <Text style={styles.label}>Image</Text>
      {!!_id && !temporalImageURL && <Image source={img ? { uri: img } : require('../../assets/images/image-not-found.png')} style={styles.image} />}
      {!!_id && temporalImageURL && <Image source={{ uri: temporalImageURL }} style={styles.image} />}
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
