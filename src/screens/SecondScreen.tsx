import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SecondScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
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
