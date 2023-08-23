import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./calendarCSS";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import moment from "moment";

const date = new Date();

const CalendarMolecula = () => {
  const [showSince, setShowSince] = useState(false);
  const [showUntil, setShowUntil] = useState(false);
  const [since, setSince] = useState(new Date());
  const [until, setUntil] = useState(new Date());
  useEffect(() => {
    // const date = moment(since).format('ddd ')+", "+
    console.log(moment(since).format("ddd, D MMM"));
    setShowSince(false);
    setShowUntil(false);
  }, []);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="white"
        style={styles.button}
        onPress={() => {
          setShowSince(!showSince);
          console.log(showSince);
        }}
      >
        <Text style={styles.text}>{moment(since).format("ddd, D MMM")}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="white"
        style={styles.button}
        onPress={() => {
          setShowUntil(!showUntil);
        }}
      >
        <Text style={styles.text}>{moment(until).format("ddd, D MMM")}</Text>
      </TouchableHighlight>
      {showSince && (
        <DateTimePicker
          mode="date"
          value={since}
          display="default"
          onChange={(event, date) => {
            setSince(date);
            setShowSince(!showSince);
          }}
        />
      )}
      {showUntil && (
        <DateTimePicker
          mode="date"
          value={until}
          display="default"
          onChange={(event, date) => {
            setUntil(date);
            setShowUntil(!showUntil);
          }}
        />
      )}
    </View>
  );
};

export default CalendarMolecula;
