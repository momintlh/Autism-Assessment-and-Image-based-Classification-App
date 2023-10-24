import React, {State} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

function ButtonIntro(prop) {
  return (
    <View
      style={{
        position: 'absolute',
        top: prop.t,
        left: prop.l,
        right: prop.r,
        bottom: prop.b,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={styles.buttonS}
        onPress={() => {
          console.log('suiiiii');
        }}>
        {' '}
        Get Started
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonS: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 23,
    borderRadius: 69,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default ButtonIntro;