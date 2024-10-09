import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { CarListScreenNavigationProps } from '../navigation/types';
import { type Car } from '../../data/types';
import cars from '../../data/cars.json';

const CarListScreen = (): JSX.Element => {
  const { navigate } = useNavigation<CarListScreenNavigationProps>();

  const goToCarDetail = (car: Car) => () => {
    navigate('CarDetail', { carId: car.id });
  };

  const renderItem = ({ item }: { item: Car }) => {
    return (
      <ListItem bottomDivider onPress={goToCarDetail(item)}>
        <ListItem.Content>
          <ListItem.Title>{`${item.make} ${item.model}`}</ListItem.Title>
          <ListItem.Subtitle>{item.year_of_first_manufacture}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList<Car>
        data={cars}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CarListScreen;
