import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';
import IUser from '../interfaces/user.interface';
import AuthContext from '../contexts/auth.context';

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@reactNativeAuth:user');
      const storageToken = await AsyncStorage.getItem('@reactNativeAuth:token');

      // A kind of sleep
      //   await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storageUser && storageToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else {
        setUser(null);
      }
    }

    loadStorageData();
  });

  async function signIn() {
    setLoading(true);
    const response = await auth.signIn();

    setUser(response.user);
    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem(
      '@reactNativeAuth:user',
      JSON.stringify(response.user),
    );

    await AsyncStorage.setItem('@reactNativeAuth:token', response.token);
  }

  async function signOut() {
    setLoading(true);
    await AsyncStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
