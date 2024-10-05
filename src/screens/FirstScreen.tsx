import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FirstScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>FirstScreen</Text>
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
