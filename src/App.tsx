import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes/index';
import {AuthProvider} from './providers/auth.provider';

// FC = Function Component
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
