import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View, ImageBackground, TouchableOpacity, Alert, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { User } from '../navigation/StackNavigator';
import { styles } from '../theme/estilos';
import { TitleComponents } from '../components/TitleComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ButtonComponent } from '../components/ButtonComponent';

//interface para props usuario
interface Props {
    users: User[];
}

//interface para props de SignIn
interface SinIngForm {
    email: string,
    password: string
}

export const SignIn = ({ users }: Props) => {
    //hook
    const [singInForm, setSingInForm] = useState<SinIngForm>({
        email: '',
        password: ''
    });

    const navigation = useNavigation();
    //Obtener la resolucion de la pantalla
    const { height, width } = useWindowDimensions();
    //useState para boton de amostrar o ocultar contraseña
    const [ocultar, setOcultar] = useState(true);

    //Funcion oara manejo de cambio en los formularios
    const handleChange = (name: string, value: string): void => {
        setSingInForm({ ...singInForm, [name]: value });
        // console.log(singInForm);

    }

    //Funcion para verificar si existe el user
    const verificarUser = (): User | undefined => {
        const usuarioExist = users.find(user => user.email === singInForm.email && user.password === singInForm.password)
        return usuarioExist;
    }

    //Funciones para iniciar sesion
    const loginUser = (): void => {
        //validaciones por cada input
        if (singInForm.email === '' && singInForm.password === '') {
            Alert.alert('Porfavor llene todos los campos')
            return;
        }

        if (singInForm.password.length < 6) {
            Alert.alert('Su contraseña debe ser de minimo 6 caracteres')
            return;
        }
        if (!singInForm.email.includes('@') && !singInForm.email.includes('.com')) {
            Alert.alert('Correo no valido ingrese de nuevo');
            return;
        }
        //verificar si usuaro no existe
        if (!verificarUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos')
            return;
        }

        //Navegacion
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))
        console.log(singInForm);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: 'https://i.pinimg.com/736x/19/bd/f8/19bdf897060a4d33e62448eb52488ef3.jpg' }} // Ruta de la imagen local
                style={{
                    ...styles.background1,
                    height: height,
                    width: width
                }}
            >
                <TitleComponents title='Welcome To TecZone' />
                <View style={styles.container1}>


                    <View style={{
                        ...styles.container2,
                        width: width * 0.9,
                        height: height * 0.38,
                        maxWidth: 425

                    }}>
                        <Text style={{
                            ...styles.textoSignIn,
                            textAlign: 'center'
                        }}>Sign In</Text>
                        <View>
                            <TextInput
                                style={{
                                    ...styles.textinput1,
                                    height: height * 0.06,
                                }}
                                onChangeText={(value) => handleChange('email', value)}
                                placeholder="E-mail"
                                keyboardType="email-address"

                            />

                            <TextInput
                                style={{
                                    ...styles.textinput2,
                                    height: height * 0.06,
                                }}
                                onChangeText={(value) => handleChange('password', value)}
                                placeholder="Contraseña"
                                keyboardType="default"
                                secureTextEntry={ocultar} /* esta propiedad cifra mi contraseña para q no se vea en el text input*/
                            />
                            {/*  Icono para amostrar o ocultar la contraseña */}
                            <Icon name={
                                (ocultar)
                                    ? 'visibility'
                                    : 'visibility-off'
                            }
                                color={'black'}
                                size={20}
                                onPress={() => setOcultar(!ocultar)}
                                style={styles.iconPassword}
                            />
                        </View>
                        <ButtonComponent title='Iniciar Sesion' handleSendInfor={loginUser} />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'SignUp' }))}
                    >
                        <Text style={{
                            ...styles.sub,
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>No tienes una cuenta? Regístrate aquí</Text>
                    </TouchableOpacity>




                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


