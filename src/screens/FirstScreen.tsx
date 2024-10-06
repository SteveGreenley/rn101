import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MyCard = ({headerText, bodyText, buttonText, onPress}: any) => {
  return (
    <View style={styles.contentCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text>{bodyText}</Text>
        <Button onPress={onPress} title={buttonText} />
      </View>
    </View>
  );
};

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
  contentCard: {
    backgroundColor: 'lightgrey',
    margin: 40,
    padding: 10,
    borderRadius: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 10,
  },
  cardBody: {
    padding: 10,
  },
});

export default FirstScreen;
