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
  phoneNumber: string;
  password: string,
  confPassword: string
}

//Usuarios de prueba
const users: User[] = [
  { id: 1, name: 'luis', email: 'luis@gmail.com', phoneNumber:'0999456321', password: 'lu12345', confPassword:'lu1234' },
  { id: 1, name: 'alisson', email: 'alisson@gmail.com', phoneNumber:'0989458621',  password: 'al12345', confPassword:'al12345' },
  { id: 1, name: 'chris', email: 'chris@gmail.com', phoneNumber:'0963454521',  password: 'ch12345', confPassword:'ch12345' }
]

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const addUsers=(user: User): void =>{
    //Agregar nuevos usuarios al usersManager
    setUsersManager([...usersManager, user])
}
//hook useState: permite controlar el estado de los usuarios 
const [usersManager, setUsersManager] = useState<User[]>(users)
  
  return (
    <Stack.Navigator >
      <Stack.Screen name="SignIn"
        children={() => <SignIn users={usersManager} />} />
      <Stack.Screen name="SignUp"
                options={{ headerShown: false }}
                children={()=><SignUp users ={usersManager} addUsers={addUsers}/>} />

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

