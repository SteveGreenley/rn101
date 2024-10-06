import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AircraftListScreenNavigationProps} from '../navigation/types';

const AircraftListScreen = (): JSX.Element => {
  const {navigate} = useNavigation<AircraftListScreenNavigationProps>();

  const goToAircraftDetail = () => {
    navigate('AircraftDetail');
  };

  return (
    <View style={styles.container}>
      <Text>AircraftListScreen </Text>
      <Button title="Go to Aircraft Details" onPress={goToAircraftDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AircraftListScreen;
