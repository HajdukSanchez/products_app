import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../components';
import { styles } from './ProtectedScreen.styles';
import { AuthContext } from '../../context/authContext/AuthContext';

const ProtectedScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Hello ' ${user?.nombre} '\nThis is your information`}</Text>
      <Text style={styles.text}>{JSON.stringify(user, null, 5)}</Text>
      <Button text="Log Out" onPress={handleLogOut} />
      <Text style={styles.text}>{JSON.stringify(token, null, 5)}</Text>
    </View>
  );
};

export { ProtectedScreen };
