import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = (): JSX.Element => {
  const {navigate} = useNavigation();

  const goToSecondScreen = () => {
    navigate('Second');
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.headerText}>The First Screen Header</Text>
        </View>
        <View style={styles.cardBody}>
          <Text>
            The First Screen Body. Elit cupidatat eu labore sunt consectetur
            ullamco amet duis mollit non.{'\n\n'}Amet enim duis ad officia minim
            elit ad tempor proident laboris deserunt qui excepteur.
          </Text>
          <Button onPress={goToSecondScreen} title="Go to Second Screen" />
        </View>
      </View>
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
