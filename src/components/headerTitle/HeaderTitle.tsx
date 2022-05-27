import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import { styles } from './HeaderTitle.styles';

interface HeaderTitleProps {
  title: string;
  rightComponent?: ReactNode;
}

const HeaderTitle = ({ title, rightComponent }: HeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {rightComponent}
    </View>
  );
};

export { HeaderTitle };
