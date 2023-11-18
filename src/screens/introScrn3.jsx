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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {Button, RadioButton} from 'react-native-paper';
import LogoIntroScreen from '../components/LogoIntroScree';
import RadioButtonIntro from '../components/RadioButtonIntro';
import TextIntroScreen from '../components/TextIntroScreen';
import WaveShape from '../components/WaveShape';
import SpecialButton from '../components/SpecialButton';


import ButtonIntro from '../components/ButtonIntro';

function IntroScreen3({navigation}) {
  const [textFooter, changeTextFooter] = React.useState('AQ 10 question');
  const [shapeCond, setShapeCond] = React.useState(false);

  const handleGesture = evt => {
    const {nativeEvent} = evt;

    if (nativeEvent.velocityX > 0) {
      console.log('Swipe right');
      navigation.navigate('Details');
      // navigation.navigate('Home')
    }

    if (nativeEvent.velocityX < 0) {
      console.log('Swipe rleft');

      changeTextFooter('changed text');
      setShapeCond(false);
    }
  };

  return (
    <GestureHandlerRootView style={{backgroundColor: '#FDFDFD', flex: 1}}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.container}>
          <LogoIntroScreen pageN={3} h={262} w={285} />
          <TextIntroScreen tFooter="Graph for Visualization" />
          <Text style={styles.tagText}>
          Visualize your results in graphical form.
          </Text>
          <SpecialButton buttonText="Lets go Nigga!"></SpecialButton>
          <RadioButtonIntro nmb={3} />
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  tagText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
});
export default IntroScreen3;
