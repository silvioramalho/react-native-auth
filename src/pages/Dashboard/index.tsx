import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {useAuth} from '../../contexts/auth.context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
