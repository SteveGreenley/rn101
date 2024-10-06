import React, {useState} from 'react';
import {View, StyleSheet, LayoutAnimation} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MyCard from '../components/MyCard';
import {Button} from '@rneui/themed';

enum Position {
  Top,
  Middle,
  Bottom,
}

const FirstScreen = (): JSX.Element => {
  const [position, setPosition] = useState<Position>(Position.Middle);
  const {navigate} = useNavigation();
  const positionStyle = positionStyles[position];

  const goToSecondScreen = () => {
    navigate('Second');
  };

  const changePosition = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPosition(prevPosition => {
      const nextPosition = (prevPosition + 1) % 3;
      return nextPosition;
    });
  };

  return (
    <View style={[styles.container, positionStyle]}>
      <MyCard
        headerText="The First Screen Header"
        bodyText="The First Screen Body. Elit cupidatat eu labore sunt consectetur ullamco amet duis mollit non. Amet enim duis ad officia minim elit ad tempor proident laboris deserunt qui excepteur."
        buttonText="Go to Second Screen"
        onPress={goToSecondScreen}
      />
      <Button style={styles.buttonGap} onPress={changePosition}>
        Change Position
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionTop: {
    justifyContent: 'flex-start',
  },
  positionMiddle: {
    justifyContent: 'center',
  },
  positionBottom: {
    justifyContent: 'flex-end',
  },
  buttonGap: {
    marginVertical: 30,
  },
});

const positionStyles = {
  [Position.Top]: styles.positionTop,
  [Position.Middle]: styles.positionMiddle,
  [Position.Bottom]: styles.positionBottom,
};

export default FirstScreen;
