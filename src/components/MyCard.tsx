import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MyCard = ({
  headerText,
  bodyText,
  buttonText,
  onPress,
}: any): JSX.Element => {
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

const styles = StyleSheet.create({
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

export default MyCard;
