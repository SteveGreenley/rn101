import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CarListScreenNavigationProps} from '../navigation/types';

const CarListScreen = (): JSX.Element => {
  const {navigate} = useNavigation<CarListScreenNavigationProps>();

  const goToCarDetail = () => {
    navigate('CarDetail');
  };

  return (
    <View style={styles.container}>
      <Text>CarListScreen</Text>
      <Button title="Go to Car Details" onPress={goToCarDetail} />
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

export default CarListScreen;
