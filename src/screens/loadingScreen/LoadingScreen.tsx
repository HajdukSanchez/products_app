import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './LoadingScreen.styles';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5856D6" />
    </View>
  );
};

export { LoadingScreen };
