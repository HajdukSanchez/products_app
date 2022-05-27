import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HeaderTitle.styles';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export { HeaderTitle };
