import {View} from 'react-native';
import CalendarMolecula from '../moleculas/datetime/calendar.molecula';
import SearchBarMolecula from '../moleculas/searchbar/searchBar.molecula';
import CantidadPersonasMolecula from '../moleculas/cantidadPersonas.molecula';

const FilterMolecula = () => {
  return (
    <View style={{flex: 1}}>
      <SearchBarMolecula />
      <CalendarMolecula />
      <CantidadPersonasMolecula />
    </View>
  );
};

export default FilterMolecula;
