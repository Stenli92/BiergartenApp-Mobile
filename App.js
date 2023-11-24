import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import BeergardenMap from './screens/BeergardenMap';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={WelcomeScreen}  options={{ title: 'Home' }}/>
        <Stack.Screen name='BeergardenMap' component={BeergardenMap}  options={{ title: 'Beergarden Map' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
