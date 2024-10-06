import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorChoiceScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>ColorChoiceScreen - this will be a modal</Text>
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

export default ColorChoiceScreen;
