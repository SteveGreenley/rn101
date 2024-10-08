import React from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/types';

const DrawerButton = (): JSX.Element => {
  const { openDrawer } = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  return <Icon name="menu" onPress={openDrawer} />;
};

export default DrawerButton;
