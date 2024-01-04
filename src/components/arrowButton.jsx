import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  BounceInUp,
  BounceInDown,
} from 'react-native-reanimated';

function ArrowButton(props) {
  const arrowImagePath = require('../assets/images/arrowButton.png');

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const onClick1 = () => {
    props.navi.navigate('Signin');
  };

  return (
    <AnimatedTouchable
      entering={FadeInDown.delay(150).duration(600)}
      onPress={() => {
        props.navi.navigate('Signin');
      }}>
      <Image
        source={arrowImagePath}
        style={{height: props.h, width: props.w, resizeMode: 'contain'}}
        onClick={onClick1}></Image>
    </AnimatedTouchable>
  );
}

export default ArrowButton;