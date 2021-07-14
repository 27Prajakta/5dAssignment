import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, Details, Favourites } from './app/screens';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Favourites" component={Favourites} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
