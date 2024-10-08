import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MyCard from '../components/MyCard';


const FirstScreen = (): JSX.Element => {
  const {navigate} = useNavigation();

  const goToSecondScreen = () => {
    navigate('Second');
  };

  return (
    <View style={styles.container}>
      <MyCard
        headerText="The First Screen Header"
        bodyText="The First Screen Body. Elit cupidatat eu labore sunt consectetur ullamco amet duis mollit non. Amet enim duis ad officia minim elit ad tempor proident laboris deserunt qui excepteur."
        buttonText="Go to Second Screen"
        onPress={goToSecondScreen}
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
  positionTop: {
    justifyContent: 'flex-start',
  },
  positionMiddle: {
    justifyContent: 'center',
  },
  positionBottom: {
    justifyContent: 'flex-end',
  },
  buttonGap: {
    marginVertical: 30,
  },
});

export default FirstScreen;
