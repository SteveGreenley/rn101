import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import { AircraftDetailScreenRouteProp } from '../navigation/types';

const AircraftDetailScreen = (): JSX.Element => {
  const [isFillScreen, setIsFillScreen] = useState(false);

  const { params } = useRoute<AircraftDetailScreenRouteProp>();
  const { description, imageUrl } = params;

  const toggleFillScreen = () => {
    setIsFillScreen(!isFillScreen);
  };

  return (
    <View style={styles.container}>
      <Image
        src={imageUrl}
        containerStyle={styles.aircraftImage}
        resizeMode={isFillScreen ? 'cover' : 'contain'}
        onPress={toggleFillScreen}
      />
      <Text
        style={styles.descriptionText}>{description}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aircraftImage: {
    width: '100%',
    flex: 1,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightgrey',
  },
});

export default AircraftDetailScreen;
