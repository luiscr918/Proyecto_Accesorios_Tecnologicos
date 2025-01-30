
import { NavigationContainer } from '@react-navigation/native';
import {  View } from 'react-native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigation/StackNavigator';

 const App=() =>{
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
export default App


