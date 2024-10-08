import React from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const DrawerButton = (): JSX.Element => {
  const {openDrawer} = useNavigation();
  return <Icon name="menu" onPress={openDrawer} />;
};

export default DrawerButton;
