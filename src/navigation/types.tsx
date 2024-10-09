import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AircraftStackParamList = {
  AircraftList: undefined;
  AircraftDetail: undefined;
};

export type AircraftListScreenNavigationProps = NativeStackNavigationProp<
  AircraftStackParamList,
  'AircraftList'
>;

export type AircraftDetailScreenNavigationProps = NativeStackNavigationProp<
  AircraftStackParamList,
  'AircraftDetail'
>;

export type CarStackParamList = {
  CarList: undefined;
  CarDetail: { carId: number };
};


export type CarListScreenNavigationProps = NativeStackNavigationProp<
  CarStackParamList,
  'CarList'
>;

export type CarDetailScreenNavigationProp = NativeStackNavigationProp<
  CarStackParamList,
  'CarDetail'
>;

export type CarDetailScreenRouteProp = RouteProp<
  CarStackParamList,
  'CarDetail'
>;

export type MainTabParamList = {
  CarListStack: NavigatorScreenParams<CarStackParamList>;
  AircraftListStack: NavigatorScreenParams<AircraftStackParamList>;
};

export type DrawerParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  About: undefined;
};

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  ColorChoiceModal: undefined;
  AboutModal: undefined;
  SettingsModal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
