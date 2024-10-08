import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed';
import {
  RootStackParamList,
  MainTabParamList,
  CarStackParamList,
  AircraftStackParamList,
} from './types';
import SettingsButton from '../components/SettingsButton';
import DrawerButton from '../components/DrawerButton';
import CloseButton from '../components/CloseButton';
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
        options={{
          title: 'Aircraft',
          headerLeft: DrawerButton,
        }}
        name="AircraftList"
        component={AircraftListScreen}
      />
      <AircraftStack.Screen
        options={{
          headerBackVisible: true,
          title: 'Aircraft Detail',
        }}
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
      <CarStack.Screen
        options={{
          headerLeft: DrawerButton,
          title: 'Cars',
        }}
        name="CarList"
        component={CarListScreen}
      />
      <CarStack.Screen
        options={{
          headerBackVisible: true,
          title: 'Car Detail',
        }}
        name="CarDetail"
        component={CarDetailScreen}
      />
    </CarStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator<MainTabParamList>();

const mainTabScreenDescriptions: Record<string, string> = {
  CarListStack: 'Cars',
  AircraftListStack: 'Aircraft',
};

const mainTabScreenOptions = ({ route }: any) => ({
  headerShown: false,
  title: mainTabScreenDescriptions[route.name],
  tabBarIcon: ({ color, size }: any) => {
    let iconName = '';
    if (route.name === 'CarListStack') {
      iconName = 'car-sport';
    } else if (route.name === 'AircraftListStack') {
      iconName = 'airplane';
    }
    return <Icon type="ionicon" name={iconName} size={size} color={color} />;
  },
});

const MainTabScreen = (): JSX.Element => {
  return (
    <MainTab.Navigator screenOptions={mainTabScreenOptions}>
      <MainTab.Screen name="CarListStack" component={CarStackScreen} />
      <MainTab.Screen
        name="AircraftListStack"
        component={AircraftStackScreen}
      />
    </MainTab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerScreen = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainTab"
        options={{ headerShown: false }}
        component={MainTabScreen}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Drawer"
          options={{ headerShown: false }}
          component={DrawerScreen}
        />
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
            headerRight: CloseButton,
          }}>
          <RootStack.Screen
            name="ColorChoiceModal"
            component={ColorChoiceScreen}
          />
          <RootStack.Screen name="AboutModal" component={AboutScreen} />
          <RootStack.Screen name="SettingsModal" component={SettingsScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
