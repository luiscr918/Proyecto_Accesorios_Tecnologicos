import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Home from '../screens/Home';
//Interface de usuarios
export interface User {
  id: number,
  name: string,
  email: string,
  password: string
}

//Usuarios de prueba
const users: User[] = [
  { id: 1, name: 'luis', email: 'luis@gmail.com', password: 'lu12345' },
  { id: 1, name: 'alisson', email: 'alisson@gmail.com', password: 'al12345' },
  { id: 1, name: 'chris', email: 'chris@gmail.com', password: 'ch12345' }
]

const Stack = createStackNavigator();

export const StackNavigator = () => {

  //hook que permite controlar el estado de los usuarios
  const [usersManager, setUserManager] = useState<User[]>(users);

  /* //funcion agreagr usuarios al userManger
  const agregarUsers = (user: User): void => {
    setUserManager([...usersManager, user])
  } */

  return (
    <Stack.Navigator >
      <Stack.Screen name="SignIn"
        children={() => <SignIn users={usersManager} />} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
