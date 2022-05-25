import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './Logo.styles';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/react-logo-white.png')} style={styles.image} />
    </View>
  );
};

export { Logo };
