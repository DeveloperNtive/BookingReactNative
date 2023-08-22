import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Alojamiento from './pages/alojamiento/alojamiento'
import Home from './pages/home/home'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName='alojamiento'>
        <Stack.Screen
          name='alojamiento'
          component={Alojamiento}
          options={{
            title: 'Booking.com',
            headerStyle: {
              backgroundColor: '#003580'
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
