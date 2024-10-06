import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
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
        options={{title: 'Aircraft'}}
        name="AircraftList"
        component={AircraftListScreen}
      />
      <AircraftStack.Screen
        options={{title: 'Aircraft Detail'}}
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
        options={{title: 'Cars'}}
        name="CarList"
        component={CarListScreen}
      />
      <CarStack.Screen
        options={{title: 'Car Detail'}}
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

const mainTabScreenOptions = ({route}: any) => ({
  headerShown: false,
  title: mainTabScreenDescriptions[route.name],
  tabBarIcon: ({color, size}: any) => {
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
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
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
