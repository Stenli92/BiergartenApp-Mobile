import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import BeergardenMap from './screens/BeergardenMap';
import BiergardenDetails from './screens/BiergardenDetails';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={WelcomeScreen}  options={{ title: 'Home' }}/>
        <Stack.Screen name='BeergardenMap' component={BeergardenMap}  options={{ title: 'Beergarden Map' }}/>
        <Stack.Screen name='BiergardenDetails' component={BiergardenDetails}  options={{ title: 'Beergarden Details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
