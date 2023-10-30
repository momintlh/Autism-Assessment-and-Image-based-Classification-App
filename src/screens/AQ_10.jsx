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
import AQtest from '../components/AQ_10.json';
import {RadioButton} from 'react-native-paper';

function AQ_10() {
  //console.log(AQtest['1a'])
  const list = ['a', 'b', 'c', 'd'];
  let correctAns = Array(10).fill(0);
  // console.log(correctAns)
  const [selectedKeys, setSelectedKeys] = React.useState({});

  return (
    <View style={{flex: 1, backgroundColor: 'black', padding: 12}}>
      <ScrollView>
        {correctAns.map((items, idx) => (
          <View key={idx}>
            <Text>{idx + 1 + '). ' + AQtest[String(idx + 1) + 'a']['Q']}</Text>
            {list.map((item, index) => (
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  //key={String(idx + 1) + 'a' + item}
                  status={
                    selectedKeys[idx] === String(idx + 1) + 'a' + item
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={keyr => {
                    console.log(
                      'idx:',
                      AQtest[String(idx + 1) + 'a']['correct'],
                    );
                    console.log(AQtest[String(idx + 1) + 'a']['Q']);
                    setSelectedKeys({
                      ...selectedKeys,
                      [idx]: String(idx + 1) + 'a' + item,
                    });
                  }}
                />
                <Text>{AQtest['1a']['options'][item]}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
export default AQ_10;