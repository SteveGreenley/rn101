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
      <Text>FirstScreen</Text>
      <Button onPress={goToSecondScreen} title="Go to Second Screen" />
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

export default FirstScreen;
