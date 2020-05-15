import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes/index';
import AuthContext from './contexts/auth';
import { AuthProvider } from './contexts/auth';

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
