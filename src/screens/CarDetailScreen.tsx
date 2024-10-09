import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import { CarDetailScreenNavigationProp, CarDetailScreenRouteProp } from '../navigation/types';
import cars from '../../data/cars.json';

const CarDetailScreen = (): JSX.Element => {
  const [isFillScreen, setIsFillScreen] = useState(false);
  const { setOptions } = useNavigation<CarDetailScreenNavigationProp>();
  const { params } = useRoute<CarDetailScreenRouteProp>();
  const { carId } = params;
  const car = cars.find((c) => c.id === carId);

  const toggleFillScreen = () => {
    setIsFillScreen(!isFillScreen);
  };

  useEffect(() => {
    if (car) {
      setTimeout(() => {
        setOptions({ title: `${car.make} ${car.model}` });
      }, 1000);
    }
  }, [car, setOptions]);

  return (
    <View style={styles.container}>
      {car && (
        <>
          <Image
            src={car.image_url}
            containerStyle={styles.carImage}
            resizeMode={isFillScreen ? 'cover' : 'contain'}
            onPress={toggleFillScreen}
          />
          <Text style={styles.yearText}>{`${car.year_of_first_manufacture}`}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carImage: {
    width: '100%',
    flex: 1,
  },
  yearText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'lightgrey',
  },
});

export default CarDetailScreen;
