import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>AboutScreen - make this a flipover!</Text>
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

export default AboutScreen;
