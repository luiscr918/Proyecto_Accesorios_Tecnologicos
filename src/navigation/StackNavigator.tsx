import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
