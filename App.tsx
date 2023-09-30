import React from 'react';
import {View, Text} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/ProfileScreen';
import FeedScreen from './src/screens/FeedScreen';
import AboutScreen from './src/screens/AboutScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  const Tabs = AnimatedTabBarNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#2F7C6E',
          inactiveTintColor: '#222222',
        }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Feed" component={FeedScreen} />
        <Tabs.Screen name="About" component={AboutScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
    // <HomeScreen />
  );
};

export default App;
