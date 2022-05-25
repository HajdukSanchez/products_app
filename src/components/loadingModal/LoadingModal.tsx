import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

import { styles } from './LoadingModal.styles';

interface LoadingModalProps {
  isVisible: boolean;
}

const LoadingModal = ({ isVisible }: LoadingModalProps) => {
  return (
    <Modal animationType="fade" statusBarTranslucent transparent visible={isVisible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#5856D6" />
      </View>
    </Modal>
  );
};

export { LoadingModal };
