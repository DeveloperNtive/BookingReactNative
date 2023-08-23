import { useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./searchBarCss";
import { useSelector, useDispatch } from "react-redux";
import { destination } from "../../../redux/destinationSlice";

const SearchBarMolecula = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const destinationText = useSelector(
    (state: any) => state.destination.destination
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        value={destinationText}
        onChange={({ nativeEvent }) => {
          dispatch(destination(nativeEvent.text));
          console.log(destinationText);
          // setSearchQuery(nativeEvent.text);
        }}
        placeholder="Enter destination"
      />
    </View>
  );
};
export default SearchBarMolecula;
