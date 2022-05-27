import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderTitle } from '../../components';
import { styles } from './ProductsScreen.styles';
import { Product } from '../../models/product.model';
import { ProductsContext } from '../../context/ProductsContext/productsContext';

interface ProductItemProps {
  product: Product;
}

const ProductsScreen = () => {
  const { top } = useSafeAreaInsets();
  const { products } = useContext(ProductsContext);

  return (
    <View style={{ ...styles.container, paddingTop: top + 20 }}>
      <FlatList
        data={products}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item }) => <_ProductItem product={item} />}
        ListHeaderComponent={<HeaderTitle title="Products" />}
      />
    </View>
  );
};

const _ProductItem = ({
  product: {
    nombre,
    img,
    precio,
    categoria: { nombre: nombreCategoria },
  },
}: ProductItemProps) => {
  return (
    <View style={styles.product}>
      <TouchableOpacity style={styles.productContainer} activeOpacity={0.8}>
        <View style={styles.productLeft}>
          <Image source={img ? { uri: img } : require('../../assets/images/image-not-found.png')} style={styles.productImage} />
          <View>
            <Text style={styles.productText}>{nombre}</Text>
            <Text style={{ ...styles.productText, ...styles.productCategory }}>{nombreCategoria}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.productPrice}>$ {precio}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const _ItemSeparator = () => <View style={styles.separator} />;

export { ProductsScreen };
