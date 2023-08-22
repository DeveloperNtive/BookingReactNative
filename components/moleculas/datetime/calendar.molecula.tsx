import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './calendarCSS';

const CalendarMolecula = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={'#3a5266'}
        style={styles.button}
        onPress={() => console.log('Since')}>
        <Text style={styles.text}>SINCE</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={'#3a5266'}
        style={styles.button}
        onPress={() => console.log('until')}>
        <Text style={styles.text}>UNTIL</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CalendarMolecula;
