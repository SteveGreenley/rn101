import React from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const SettingsButton = (): JSX.Element => {
  const {navigate} = useNavigation();
  const goToSettings = () => {
    navigate('SettingsModal');
  };
  return <Icon name="settings" onPress={goToSettings} />;
};

export default SettingsButton;
