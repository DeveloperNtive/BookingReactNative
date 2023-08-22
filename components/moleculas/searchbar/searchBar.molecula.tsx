import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './searchBarCss';

const SearchBarMolecula = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={styles.inputText}
        value={searchQuery}
        onChange={({nativeEvent}) => setSearchQuery(nativeEvent.text)}
        placeholder="Enter destination"
      />
    </View>
  );
};
export default SearchBarMolecula;
