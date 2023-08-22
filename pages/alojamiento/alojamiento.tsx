import {Button, StyleSheet, Text, View} from 'react-native';
import FilterMolecula from '../../components/organismos/filters.organismo';

const Alojamiento = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      {/* searchComoponent */}
      <FilterMolecula />
      {/* continue your search */}
      {/* Travel more, spend less */}
      {/* More for you */}
      {/* Tab navegacion */}
    </View>
  );
};

const styles = StyleSheet.create({
  tittle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTittle: {
    color: 'white',
  },
  background: {
    backgroundColor: '#0049b0',
  },
});

export default Alojamiento;
