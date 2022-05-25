import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

import { styles } from './Background.styles';

const Background = () => {
  const { width, height } = useWindowDimensions();

  return <View style={{ ...styles.container, width: width * 2, height: height * 2 }}></View>;
};

export { Background };
