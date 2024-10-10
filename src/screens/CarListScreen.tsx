import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ListItem} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {CarListScreenNavigationProps} from '../navigation/types';
import type {RootState} from '../app/store';
import {useSelector} from 'react-redux';
import type {Car} from '../features/carCollection/carCollectionSlice';

const NoCars = () => {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title style={styles.subtleText}>
          There are no cars
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const CarListScreen = (): JSX.Element => {
  const {navigate} = useNavigation<CarListScreenNavigationProps>();

  const goToCarDetail = (car: Car) => () => {
    navigate('CarDetail', {carId: car.id});
  };

  const cars = useSelector((state: RootState) => state.carCollection.cars);

  const renderItem = ({item}: {item: Car}) => {
    return (
      <ListItem bottomDivider onPress={goToCarDetail(item)}>
        <ListItem.Content>
          <ListItem.Title>{`${item.make} ${item.model}`}</ListItem.Title>
          <ListItem.Subtitle>
            {item.year_of_first_manufacture}
          </ListItem.Subtitle>
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
        ListEmptyComponent={NoCars}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtleText: {
    color: 'lightgrey',
  },
});

export default CarListScreen;
