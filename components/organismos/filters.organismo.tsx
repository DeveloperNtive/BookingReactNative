import { View } from "react-native";
import CalendarMolecula from "../moleculas/datetime/calendar.molecula";
import SearchBarMolecula from "../moleculas/searchbar/searchBar.molecula";
import CantidadPersonasMolecula from "../moleculas/cantidadpersonas/cantidadPersonas.molecula";
import { styles } from "./filterCSS";

const FilterMolecula = () => {
  return (
    <View style={styles.container}>
      <SearchBarMolecula />
      <CalendarMolecula />
      <CantidadPersonasMolecula />
    </View>
  );
};

export default FilterMolecula;
