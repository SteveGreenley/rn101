import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

type MyCardProps = {
  headerText?: string;
  bodyText: string;
  buttonText: string;
  onPress: () => void;
};

const MyCard = ({
  headerText,
  bodyText,
  buttonText,
  onPress,
}: MyCardProps): JSX.Element => {
  return (
    <View style={styles.contentCard}>
      {headerText && (
        <View style={styles.cardHeader}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
      )}
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
