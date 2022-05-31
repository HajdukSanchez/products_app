import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderTitle } from '../../components';
import { styles } from './ProductsScreen.styles';
import { Product } from '../../models/product.model';
import { RootProductsStackParamList } from '../../routes/routes';
import { ProductsContext } from '../../context/productsContext/ProductsContext';

interface ProductItemProps {
  product: Product;
  onPress: () => void;
}

interface RightHeaderButtonProps {
  onPress: () => void;
}

interface ProductsScreenProps extends StackScreenProps<RootProductsStackParamList, 'Products'> {}

const ProductsScreen = ({ navigation: { navigate } }: ProductsScreenProps) => {
  const { top } = useSafeAreaInsets();
  const { products, loading, loadProducts } = useContext(ProductsContext);

  const handleNavigateToProduct = (product: Product) => {
    navigate('Product', { product });
  };

  const handleAddNewProduct = () => {
    navigate('Product', { product: {} as Product });
  };

  const handleProductsRefresh = () => {
    loadProducts();
  };

  return (
    <View style={{ ...styles.container, paddingTop: top + 20 }}>
      <FlatList
        data={products}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item }) => <_ProductItem product={item} onPress={() => handleNavigateToProduct(item)} />}
        ListHeaderComponent={<HeaderTitle title="Products" rightComponent={<_RightHeaderButton onPress={handleAddNewProduct} />} />}
        ItemSeparatorComponent={_ItemSeparator}
        refreshing={loading}
        onRefresh={handleProductsRefresh}
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
  onPress,
}: ProductItemProps) => {
  return (
    <View style={styles.product}>
      <TouchableOpacity style={styles.productContainer} activeOpacity={0.8} onPress={onPress}>
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

const _RightHeaderButton = ({ onPress }: RightHeaderButtonProps) => {
  return (
    <TouchableOpacity style={styles.headerButton} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.headerButtonText}>+</Text>
    </TouchableOpacity>
  );
};

export { ProductsScreen };
