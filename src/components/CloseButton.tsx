import React from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const SettingsButton = (): JSX.Element => {
  const {goBack} = useNavigation();
  return <Icon name="close" onPress={goBack} />;
};

export default SettingsButton;
