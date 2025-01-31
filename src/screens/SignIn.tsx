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
                    color: '#01FFFF'
                }}>TekZone</Text>

                {/* seccion correo electronico */}
                <View >
                    <Text style={styles.textoSignIn}>Email:</Text>
                    <TextInput
                        style={{
                            ...styles.textinput,
                            height: height * 0.06
                        }}
                        onChangeText={onChangeEmail}
                        value={correo}
                        placeholder="user@companyname.com"
                        keyboardType="email-address"
                    />
                </View>


                {/* Seccion de Password */}
                <View >
                    <Text style={styles.textoSignIn}>Password:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={{
                                ...styles.textinput,
                                height: height * 0.06
                            }}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="************"
                            keyboardType="default"
                            secureTextEntry={showPassword} /* esta propiedad cifra mi contraseña para q no se vea en el text input*/
                        />
                        {/* Botoncito para amostrar o ocultar contraseña */}
                        <TouchableOpacity
                            style={{
                                ...styles.button,
                                height: height * 0.06
                            }}
                            onPress={() => setShowPassword(!showPassword)} // Alterna el estado
                        >
                            <Text >
                                {showPassword ? "Mostrar" : "Ocultar"}
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

    textoSignIn: {
        fontSize: 40,
        textAlign: 'center',
        color: '#00ff00',
        fontWeight: 'bold'
    },
    textinput: {
        alignItems: 'center',
        margin: 'auto',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        alignContent: 'center',
        margin: 'auto',
    }
})
