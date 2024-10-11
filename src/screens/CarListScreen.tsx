import React from 'react';
import {View, StyleSheet, FlatList, LayoutAnimation} from 'react-native';
import {ListItem, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {CarListScreenNavigationProps} from '../navigation/types';
import type {RootState} from '../app/store';
import {useSelector, useDispatch} from 'react-redux';
import {
  type Car,
  removeCar,
} from '../features/carCollection/carCollectionSlice';

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
  const cars = useSelector((state: RootState) => state.carCollection.cars);
  const dispatch = useDispatch();

  const goToCarDetail = (car: Car) => () => {
    navigate('CarDetail', {carId: car.id});
  };

  const swipeRightContent = (itemId: number) => (
    <Button
      title="Delete"
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        dispatch(removeCar(itemId));
      }}
      icon={{name: 'delete', color: 'white'}}
      buttonStyle={styles.deleteButton}
    />
  );

  const renderItem = ({item}: {item: Car}) => {
    return (
      <ListItem.Swipeable
        rightContent={swipeRightContent(item.id)}
        bottomDivider
        onPress={goToCarDetail(item)}>
        <ListItem.Content>
          <ListItem.Title>{`${item.make} ${item.model}`}</ListItem.Title>
          <ListItem.Subtitle>
            {item.year_of_first_manufacture}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
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
  deleteButton: {
    minHeight: '100%',
    backgroundColor: 'red',
  },
});

export default CarListScreen;
