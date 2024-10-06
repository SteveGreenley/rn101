import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  RootStackParamList,
  MainTabParamList,
  CarStackParamList,
  AircraftStackParamList,
} from './types';
import SettingsButton from '../components/SettingsButton';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ColorChoiceScreen from '../screens/ColorChoiceScreen';
import CarListScreen from '../screens/CarListScreen';
import CarDetailScreen from '../screens/CarDetailScreen';
import AircraftListScreen from '../screens/AircraftListScreen';
import AircraftDetailScreen from '../screens/AircraftDetailScreen';

const AircraftStack = createNativeStackNavigator<AircraftStackParamList>();

const AircraftStackScreen = (): JSX.Element => {
  return (
    <AircraftStack.Navigator
      screenOptions={{
        headerRight: SettingsButton,
      }}>
      <AircraftStack.Screen
        name="AircraftList"
        component={AircraftListScreen}
      />
      <AircraftStack.Screen
        name="AircraftDetail"
        component={AircraftDetailScreen}
      />
    </AircraftStack.Navigator>
  );
};

const CarStack = createNativeStackNavigator<CarStackParamList>();

const CarStackScreen = (): JSX.Element => {
  return (
    <CarStack.Navigator
      screenOptions={{
        headerRight: SettingsButton,
      }}>
      <CarStack.Screen name="CarList" component={CarListScreen} />
      <CarStack.Screen name="CarDetail" component={CarDetailScreen} />
    </CarStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainTabScreen = (): JSX.Element => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainTab.Screen name="CarListStack" component={CarStackScreen} />
      <MainTab.Screen
        name="AircraftListStack"
        component={AircraftStackScreen}
      />
    </MainTab.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="MainTab"
          options={{headerShown: false}}
          component={MainTabScreen}
        />
        <RootStack.Screen
          name="ColorChoiceModal"
          component={ColorChoiceScreen}
        />
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
          }}>
          <RootStack.Screen name="AboutModal" component={AboutScreen} />
          <RootStack.Screen name="SettingsModal" component={SettingsScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
