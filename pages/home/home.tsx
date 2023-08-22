import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {styles} from './homeCSS';
import FilterMolecula from '../../components/organismos/filters.organismo';

const Home = ({navigation}: any) => {
  return (
    <View>
      <FilterMolecula />
      <Button
        title="Go to Alojamiento"
        onPress={() => {
          navigation.navigate('alojamiento');
        }}
      />
    </View>
  );
};

export default Home;
