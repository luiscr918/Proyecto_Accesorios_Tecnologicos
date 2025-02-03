import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignIn = () => {
    const navigation = useNavigation();
    const [correo, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    //Obtener la resolucion de la pantalla
    const { height, width } = useWindowDimensions();
    //useState para boton de amostrar o ocultar contraseña
    const [showPassword, setShowPassword] = useState(true);
    return (
        <ImageBackground
            source={require('../../assets/fondoLogIn.jpg')} // Ruta de la imagen local
            style={{
                ...styles.background,
                height: height,
                width: width
            }}
        >
            <View style={styles.container}>
                <Text style={{
                    ...styles.textoSignIn,
                    color: '#00ffff'
                }}>TecZone</Text>

                <View style={{
                    ...styles.container2,
                    width: width * 0.9,
                    height: height * 0.35,
                    maxWidth: 425

                }}>
                    {/* seccion correo electronico */}

                    <Text style={styles.textoSignIn}>Email:</Text>
                    <TextInput
                        style={{
                            ...styles.textinput1,
                            height: height * 0.06,
                        }}
                        onChangeText={onChangeEmail}
                        value={correo}
                        placeholder="user@companyname.com"
                        keyboardType="email-address"

                    />

                    {/* Seccion de Password */}

                    <Text style={styles.textoSignIn}>Password:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={{
                                ...styles.textinput2,
                                height: height * 0.06,
                            }}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="************"
                            keyboardType="default"
                            secureTextEntry={showPassword} /* esta propiedad cifra mi contraseña para q no se vea en el text input*/
                        />
                        {/* Botoncito para amostrar o ocultar contraseña */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setShowPassword(!showPassword)} // Alterna el estado
                        >
                            <Text >
                                {showPassword
                                    ? "Ver" : "Ocultar"}
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <Button
                    title='no tengo cuenta ir a registrar'
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'SignUp' }))}
                />



            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor

    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    container2: {
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',

    },

    textoSignIn: {
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 'bold',
        margin: 5
    },
    textinput1: {
        alignItems: 'center',
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        width: '95%'
    },
    textinput2: {
        alignItems: 'center',
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        width: '70%',
        alignSelf: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 'auto',
        height: 'auto',
        width: 'auto'
    }
})

