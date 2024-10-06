import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card} from '@rneui/themed';

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
    <Card>
      {headerText && (
        <>
          <Card.Title>{headerText}</Card.Title>
          <Card.Divider />
        </>
      )}
      <View style={styles.cardBody}>
        <Text>{bodyText}</Text>
      </View>
      <Button size="md" radius="sm" type="solid" onPress={onPress}>
        {buttonText}
      </Button>
    </Card>
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
  cardBody: {
    padding: 10,
  },
});

export default MyCard;
