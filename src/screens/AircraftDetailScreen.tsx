import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AircraftDetailScreenNavigationProps} from '../navigation/types';

const AircraftDetailScreen = (): JSX.Element => {
  const {goBack} = useNavigation<AircraftDetailScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <Text>AircraftDetailScreen</Text>
      <Button title="Go back" onPress={goBack} />
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

export default AircraftDetailScreen;
