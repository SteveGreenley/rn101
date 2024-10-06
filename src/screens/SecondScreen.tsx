import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MyCard from '../components/MyCard';

const SecondScreen = (): JSX.Element => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <MyCard
        bodyText="The Second Screen Body. Elit cupidatat eu labore sunt consectetur ullamco amet duis mollit non. Amet enim duis ad officia minim elit ad tempor proident laboris deserunt qui excepteur."
        buttonText="Go Back"
        onPress={goBack}
      />
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

export default SecondScreen;
