import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CarDetailScreenNavigationProps} from '../navigation/types';

const CarDetailScreen = (): JSX.Element => {
  const {goBack} = useNavigation<CarDetailScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <Text>CarDetailScreen</Text>
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

export default CarDetailScreen;
